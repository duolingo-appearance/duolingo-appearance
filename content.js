const setInitialBackgroundIn = () => {
  chrome.storage.sync.get(["colorBackgroundIn"], items => {
    if (items.colorBackgroundIn && items.colorBackgroundIn.length > 0) {
      // A list of class names that will have the inner background color.
      const classNames = [
        '_2hEQd',
        '_1E3L7',
        'a5SW0',
        '_3DsW-',
        '_2VdVL',
        '_3s2x_',
        '_2yvtl',
        '_1O1Bz',
      ];
      classNames.forEach(className => {
        const elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
          try {
            elements[i].style.backgroundColor = items.colorBackgroundIn;
          }
          catch(TypeError) {}
        }
      });
    }
  });
};

const setInitialBackgroundOut = () => {
  chrome.storage.sync.get(["colorBackgroundOut"], items => {
    if (items.colorBackgroundOut && items.colorBackgroundOut.length > 0) {
      document.body.style.backgroundColor = items.colorBackgroundOut;
      // A list of class names that will have the outer background color.
      const classNames = [
        '_3giip',
      ];
      classNames.forEach(className => {
        const elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
          try {
            elements[i].style.backgroundColor = items.colorBackgroundOut;
          }
          catch(TypeError) {}
        }
      });
    }
  });
};

const setInitialFont = () => {
  chrome.storage.sync.get(["fontFamily", "colorFont"], items => {
    const elements = document.body.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      if (items.fontFamily && items.fontFamily.length > 0) {
        elements[i].style.setProperty("font-family", items.fontFamily, "important");
      }
      if (items.colorFont && items.colorFont.length > 0) {
        elements[i].style.setProperty("color", items.colorFont, "important");
      }
    }
  });
};

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// Apply styles every time the DOM changes.
const observer = new MutationObserver(() => {
  setInitialBackgroundOut();
  setInitialBackgroundIn();
  setInitialFont();
});

observer.observe(document, {
  subtree: true,
  attributes: true,
});
