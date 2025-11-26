// 点击扩展图标时打开侧边栏
chrome.action.onClicked.addListener(async (tab) => {
  console.log('🔵 用户点击扩展图标，准备打开侧边栏');
  console.log('🔵 当前标签页ID:', tab.id);
  console.log('🔵 当前标签页URL:', tab.url);
  
  try {
    // 检查sidePanel API是否可用
    if (!chrome.sidePanel) {
      console.warn('❌ chrome.sidePanel API is not available');
      return;
    }
    console.log('✅ chrome.sidePanel API 可用');

    // 打开侧边栏
    console.log('🔵 正在打开侧边栏...');
    await chrome.sidePanel.open({ tabId: tab.id });
    console.log('✅ 侧边栏已成功打开');
    
    // 注入content script到当前标签页
    try {
      console.log('🔵 正在注入content script...');
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
      console.log('✅ Content script已注入到当前标签页');
    } catch (injectError) {
      console.warn('⚠️ 注入content script失败:', injectError);
      // 某些页面（如chrome://页面）无法注入script，这是正常的
    }
    
  } catch (error) {
    console.error('❌ 打开侧边栏时发生错误:', error);
    console.error('错误详情:', error.message);
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
