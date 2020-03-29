const setBackgroundIn = () => {
  // Set background color for inner areas.
  let colorBackgroundIn = document.getElementById('color-background-in');
  if (colorBackgroundIn) {
    colorBackgroundIn.onchange = element => {
      let color = '#' + element.target.value;
      chrome.storage.sync.set({ "colorBackgroundIn": color }, () => {});
      chrome.storage.sync.get(["colorBackgroundIn"], items => {
        colorBackgroundIn.style.backgroundColor = items.colorBackgroundIn;
        colorBackgroundIn.value = items.colorBackgroundIn;
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'setInitialBackgroundIn();' },
          );
        });
      });
    };
  }
};

const setStartingPopupBackgroundIn = () => {
  let colorBackgroundIn = document.getElementById('color-background-in');

  chrome.storage.sync.get(["colorBackgroundIn"], items => {
    colorBackgroundIn.style.backgroundColor = items.colorBackgroundIn;
    colorBackgroundIn.value = items.colorBackgroundIn;
  });
};

const setBackgroundOut = () => {
  // Set background color for outer areas.
  let colorBackgroundOut = document.getElementById('color-background-out');

  if (colorBackgroundOut) {
    colorBackgroundOut.onchange = element => {
      let color = '#' + element.target.value;
      chrome.storage.sync.set({ "colorBackgroundOut": color }, () => {});
      chrome.storage.sync.get(["colorBackgroundOut"], items => {
        colorBackgroundOut.style.backgroundColor = items.colorBackgroundOut;
        colorBackgroundOut.value = items.colorBackgroundOut;
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'setInitialBackgroundOut();' },
          );
        });
      });
    };
  }
};

const setStartingPopupBackgroundOut = () => {
  let colorBackgroundOut = document.getElementById('color-background-out');

  chrome.storage.sync.get(["colorBackgroundOut"], items => {
    colorBackgroundOut.style.backgroundColor = items.colorBackgroundOut;
    colorBackgroundOut.value = items.colorBackgroundOut;
  });
};

const setFont = element => {
  // Set font family for entire page.
  chrome.storage.sync.set({ "fontFamily": element.value }, () => {});
  chrome.storage.sync.get(["fontFamily"], () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'setInitialFont();' },
      );
    });
  });
};

const setPopupFont = () => {
  let fontFamily = document.getElementById('font-family');

  chrome.storage.sync.get(["fontFamily"], items => {
    fontFamily.value = items.fontFamily;
  });
};

const setFontColor = () => {
  // Set background color for font.
  let colorFont = document.getElementById('color-font');

  if (colorFont) {
    colorFont.onchange = element => {
      let color = '#' + element.target.value;
      chrome.storage.sync.set({ "colorFont": color }, () => {});
      chrome.storage.sync.get(["colorFont"], items => {
        colorFont.style.backgroundColor = items.colorFont;
        colorFont.value = items.colorBackgroundOut;
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'setInitialFont();' },
          );
        });
      });
    };
  }
};

const setStartingPopupFontColor = () => {
  let colorFont = document.getElementById('color-font');

  chrome.storage.sync.get(["colorFont"], items => {
    colorFont.style.backgroundColor = items.colorFont;
    colorFont.value = items.colorFont;
  });
};

document.querySelector('select#font-family').addEventListener('change', function() {setFont(this)});

setStartingPopupBackgroundIn();
setBackgroundIn();

setStartingPopupBackgroundOut();
setBackgroundOut();

setPopupFont();
setStartingPopupFontColor();
setFontColor();
