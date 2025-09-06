// 点击扩展图标时打开侧边栏并注入content script
chrome.action.onClicked.addListener(async (tab) => {
  try {
    console.log('用户点击扩展图标，打开侧边栏');
    
    // 动态注入content script到当前标签页
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
      console.log('Content script已注入到当前标签页');
    } catch (injectError) {
      console.warn('注入content script失败:', injectError);
      // 某些页面（如chrome://页面）无法注入script，这是正常的
    }
    
    // 检查sidePanel API是否可用
    if (!chrome.sidePanel) {
      console.warn('chrome.sidePanel API is not available');
      return;
    }

    // 先设置侧边栏选项
    if (chrome.sidePanel.setOptions) {
      try {
        await chrome.sidePanel.setOptions({ 
          tabId: tab.id, 
          path: 'index.html', 
          enabled: true 
        });
        console.log('侧边栏选项已设置');
      } catch (error) {
        console.warn('设置侧边栏选项失败:', error);
      }
    }

    // 尝试打开侧边栏，如果失败则使用备用方法
    if (chrome.sidePanel.open) {
      try {
        await chrome.sidePanel.open({ tabId: tab.id });
        console.log('侧边栏已打开');
      } catch (error) {
        console.warn('直接打开侧边栏失败，尝试备用方法:', error);
        
        // 备用方法：使用chrome.tabs.create打开新标签页
        try {
          await chrome.tabs.create({
            url: chrome.runtime.getURL('index.html'),
            active: true
          });
          console.log('已在新标签页中打开翻译界面');
        } catch (fallbackError) {
          console.error('备用方法也失败:', fallbackError);
        }
      }
    }
  } catch (error) {
    console.error('打开侧边栏失败:', error);
  }
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message && message.type === 'USER_SELECTION') {
    console.log('收到用户选择的文本:', message.text);
    
    try {
      // 发送消息到侧边栏
      chrome.runtime.sendMessage({ 
        type: 'FORWARD_SELECTION_TO_PANEL', 
        text: message.text 
      });
      console.log('已发送文本到侧边栏');
    } catch (sendError) {
      console.warn('发送消息到侧边栏失败:', sendError);
    }
  }
  
  // Return true to indicate we will send a response asynchronously
  return true;
});
