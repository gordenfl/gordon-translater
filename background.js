// Function to ensure side panel is open
async function ensureSidePanelOpen(tabId, isUserGesture = false) {
  try {
    // Check if sidePanel API is available
    if (!chrome.sidePanel) {
      console.warn('chrome.sidePanel API is not available');
      return;
    }

    // Set side panel options if available
    if (chrome.sidePanel.setOptions) {
      try {
        await chrome.sidePanel.setOptions({ 
          tabId, 
          path: 'index.html', 
          enabled: true 
        });
      } catch (error) {
        console.warn('Failed to set side panel options:', error);
      }
    }

    // Only try to open side panel if it's a user gesture
    // For non-user gestures, we just set the options and let the user click the icon
    if (isUserGesture && chrome.sidePanel.open) {
      try {
        await chrome.sidePanel.open({ tabId });
      } catch (error) {
        console.warn('Failed to open side panel:', error);
        // Fallback: try to open without tabId
        try {
          await chrome.sidePanel.open({});
        } catch (fallbackError) {
          console.error('Failed to open side panel with fallback:', fallbackError);
        }
      }
    } else if (!isUserGesture) {
      console.log('Side panel options set, user can click icon to open');
    }
  } catch (error) {
    console.error('Error in ensureSidePanelOpen:', error);
  }
}

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await ensureSidePanelOpen(tab.id, true); // This is a user gesture
  } catch (e) {
    console.error('Failed to open side panel:', e);
  }
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message && message.type === 'USER_SELECTION') {
    const tabId = sender.tab && sender.tab.id ? sender.tab.id : undefined;
    try {
      if (tabId) {
        await ensureSidePanelOpen(tabId);
      }
      
      // Send message to side panel
      try {
        chrome.runtime.sendMessage({ 
          type: 'FORWARD_SELECTION_TO_PANEL', 
          text: message.text 
        });
      } catch (sendError) {
        console.warn('Failed to send message to panel:', sendError);
      }
    } catch (e) {
      console.error('Error handling USER_SELECTION:', e);
    }
  }
  
  // Return true to indicate we will send a response asynchronously
  return true;
});
