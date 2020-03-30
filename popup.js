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

const setPopupBackgroundIn = () => {
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

const setPopupBackgroundOut = () => {
  let colorBackgroundOut = document.getElementById('color-background-out');

  chrome.storage.sync.get(["colorBackgroundOut"], items => {
    colorBackgroundOut.style.backgroundColor = items.colorBackgroundOut;
    colorBackgroundOut.value = items.colorBackgroundOut;
  });
};

const setFontFamily = element => {
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

const setPopupFontFamily = () => {
  let fontFamily = document.getElementById('font-family');

  chrome.storage.sync.get(["fontFamily"], items => {
    fontFamily.value = items.fontFamily;
  });
};

const setFontSize = element => {
  // Set font family for entire page.
  chrome.storage.sync.set({ "fontSize": element.value }, () => {});
  chrome.storage.sync.get(["fontSize"], () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'setInitialFont();' },
      );
    });
  });
};

const setPopupFontSize = () => {
  let fontSize = document.getElementById('font-size');

  chrome.storage.sync.get(["fontSize"], items => {
    fontSize.value = items.fontSize;
  });
};

const setFontColor = () => {
  // Set background color for font.
  let fontColor = document.getElementById('font-color');

  if (fontColor) {
    fontColor.onchange = element => {
      let color = '#' + element.target.value;
      chrome.storage.sync.set({ "fontColor": color }, () => {});
      chrome.storage.sync.get(["fontColor"], items => {
        fontColor.style.backgroundColor = items.fontColor;
        fontColor.value = items.colorBackgroundOut;
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

const setPopupFontColor = () => {
  let fontColor = document.getElementById('font-color');

  chrome.storage.sync.get(["fontColor"], items => {
    fontColor.style.backgroundColor = items.fontColor;
    fontColor.value = items.fontColor;
  });
};

const reset = () => {
  chrome.storage.sync.set({ "fontColor": '' }, () => {});
  chrome.storage.sync.set({ "fontFamily": '' }, () => {});
  chrome.storage.sync.set({ "fontSize": '' }, () => {});
  chrome.storage.sync.set({ "colorBackgroundOut": '' }, () => {});
  chrome.storage.sync.set({ "colorBackgroundIn": '' }, () => {});

  updatePopup();
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'window.location.reload();' },
    );
  });
};

const updatePopup = () => {
  setPopupBackgroundIn();
  setPopupBackgroundOut();
  setPopupFontFamily();
  setPopupFontSize();
  setPopupFontColor();
};

document.querySelector('select#font-family').addEventListener('change', function() {setFontFamily(this)});
document.querySelector('select#font-size').addEventListener('change', function() {setFontSize(this)});
document.querySelector('#reset').addEventListener('click', function() {reset()});

updatePopup();

setBackgroundIn();
setBackgroundOut();
setFontColor();
