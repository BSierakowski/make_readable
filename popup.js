document.getElementById('make-readable').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, { file: 'make-readable.js' });
  });
});
