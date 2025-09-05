let lastSelectionText = '';

function getSelectionText() {
  const sel = window.getSelection();
  if (!sel) return '';
  const text = sel.toString().trim();
  return text;
}

function handleSelection() {
  const text = getSelectionText();
  if (!text || text === lastSelectionText) return;
  lastSelectionText = text;
  chrome.runtime.sendMessage({ type: 'USER_SELECTION', text });
}

document.addEventListener('mouseup', () => setTimeout(handleSelection, 10), { passive: true });
document.addEventListener('keyup', (e) => {
  if (e.key === 'Shift' || e.key === 'Meta' || e.key === 'Control' || e.key === 'Alt') return;
  handleSelection();
});

