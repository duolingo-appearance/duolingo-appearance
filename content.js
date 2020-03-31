const setInitialBackgroundIn = () => {
  chrome.storage.sync.get(["colorBackgroundIn"], items => {
    if (items.colorBackgroundIn && items.colorBackgroundIn.length > 0) {
      // A list of class names that will have the inner background color.
      const classNames = [
        'nae5G',
        'COg1x',
        '_2iVqi',
        '_10HmK',
        '_2VdVL',
        '_1Ch3x',
        '_3kaGF',
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
        '_2vedk',
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
  chrome.storage.sync.get(["fontFamily", "fontColor", "fontSize"], items => {
    const elements = document.body.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      if (items.fontFamily && items.fontFamily.length > 0) {
        elements[i].style.setProperty("font-family", items.fontFamily, "important");
      }
      if (items.fontColor && items.fontColor.length > 0) {
        elements[i].style.setProperty("color", items.fontColor, "important");
      }
      if (items.fontSize && items.fontSize.length > 0) {
        elements[i].style.setProperty("font-size", items.fontSize + "px", "important");
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
