document.getElementById('changeColor').addEventListener('click', () => {
    console.log('Button clicked');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Active tab:', tabs[0]);
      if (tabs.length === 0) {
        console.error('No active tab found');
        return;
      }
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeBackgroundColor
      }, () => {
        console.log('Script executed');
      });
    });
  });
  
  function changeBackgroundColor() {
    console.log('Changing background color');
    document.body.style.backgroundColor = 'lightblue';
  }
