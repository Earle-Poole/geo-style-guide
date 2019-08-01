function selectNewTab() {
  let themeTabs = document.querySelectorAll('.theme-tab');

  for(let tab of themeTabs){
    let tabClickListener = (e) =>{
      if(!tab.classList.contains('selected')){
        //not selected
        let selectedTab = document.querySelector('.theme-tab.selected');
        let container = document.querySelector('.container-fluid');
        let currentTheme = document.querySelector('.container-fluid').classList.item(1);
        let nextTheme = tab.classList.item(2);

        selectedTab.classList.remove('selected');
        container.classList.remove(currentTheme);
        container.classList.add(nextTheme);
        tab.classList.add('selected');

      };
      colorCodeGenerator();
    };
    tab.addEventListener('click', tabClickListener);
  };
};

function colorCodeGenerator() {
  const currentTheme = document.querySelector('.container-fluid').classList.item(1);

  const primaryHex = document.querySelector('#hex-primary-code'),
    primaryRGBA = document.querySelector('#rgba-primary-code'),
    primaryHSLA = document.querySelector('#hsla-primary-code'),
    primaryCMYK = document.querySelector('#cmyk-primary-code')

  const secondaryHex = document.querySelector('#hex-secondary-code'),
    secondaryRGBA = document.querySelector('#rgba-secondary-code'),
    secondaryHSLA = document.querySelector('#hsla-secondary-code'),
    secondaryCMYK = document.querySelector('#cmyk-secondary-code')

  const primaryBackgroundHex = document.querySelector('#hex-primary-background-code'),
    primaryBackgroundRGBA = document.querySelector('#rgba-primary-background-code'),
    primaryBackgroundHSLA = document.querySelector('#hsla-primary-background-code'),
    primaryBackgroundCMYK = document.querySelector('#cmyk-primary-background-code')

  const secondaryBackgroundHex = document.querySelector('#hex-secondary-background-code'),
    secondaryBackgroundRGBA = document.querySelector('#rgba-secondary-background-code'),
    secondaryBackgroundHSLA = document.querySelector('#hsla-secondary-background-code'),
    secondaryBackgroundCMYK = document.querySelector('#cmyk-secondary-background-code')



  function darkThemeSetter() {
    primaryHex.innerHTML = darkThemeObj.primaryColor.hexCode;
    primaryRGBA.innerHTML = darkThemeObj.primaryColor.rgbaCode;
    primaryHSLA.innerHTML = darkThemeObj.primaryColor.hslaCode;
    primaryCMYK.innerHTML = darkThemeObj.primaryColor.cmykCode;
  
    secondaryHex.innerHTML = darkThemeObj.secondaryColor.hexCode;
    secondaryRGBA.innerHTML = darkThemeObj.secondaryColor.rgbaCode;
    secondaryHSLA.innerHTML = darkThemeObj.secondaryColor.hslaCode;
    secondaryCMYK.innerHTML = darkThemeObj.secondaryColor.cmykCode;
    
    primaryBackgroundHex.innerHTML = darkThemeObj.primaryBackgroundColor.hexCode;
    primaryBackgroundRGBA.innerHTML = darkThemeObj.primaryBackgroundColor.rgbaCode;
    primaryBackgroundHSLA.innerHTML = darkThemeObj.primaryBackgroundColor.hslaCode;
    primaryBackgroundCMYK.innerHTML = darkThemeObj.primaryBackgroundColor.cmykCode;

    secondaryBackgroundHex.innerHTML = darkThemeObj.secondaryBackgroundColor.hexCode;
    secondaryBackgroundRGBA.innerHTML = darkThemeObj.secondaryBackgroundColor.rgbaCode;
    secondaryBackgroundHSLA.innerHTML = darkThemeObj.secondaryBackgroundColor.hslaCode;
    secondaryBackgroundCMYK.innerHTML = darkThemeObj.secondaryBackgroundColor.cmykCode;
  }
  
  function lightThemeSetter() {
    primaryHex.innerHTML = lightThemeObj.primaryColor.hexCode;
    primaryRGBA.innerHTML = lightThemeObj.primaryColor.rgbaCode;
    primaryHSLA.innerHTML = lightThemeObj.primaryColor.hslaCode;
    primaryCMYK.innerHTML = lightThemeObj.primaryColor.cmykCode;
  
    secondaryHex.innerHTML = lightThemeObj.secondaryColor.hexCode;
    secondaryRGBA.innerHTML = lightThemeObj.secondaryColor.rgbaCode;
    secondaryHSLA.innerHTML = lightThemeObj.secondaryColor.hslaCode;
    secondaryCMYK.innerHTML = lightThemeObj.secondaryColor.cmykCode;
        
    primaryBackgroundHex.innerHTML = lightThemeObj.primaryBackgroundColor.hexCode;
    primaryBackgroundRGBA.innerHTML = lightThemeObj.primaryBackgroundColor.rgbaCode;
    primaryBackgroundHSLA.innerHTML = lightThemeObj.primaryBackgroundColor.hslaCode;
    primaryBackgroundCMYK.innerHTML = lightThemeObj.primaryBackgroundColor.cmykCode;

    secondaryBackgroundHex.innerHTML = lightThemeObj.secondaryBackgroundColor.hexCode;
    secondaryBackgroundRGBA.innerHTML = lightThemeObj.secondaryBackgroundColor.rgbaCode;
    secondaryBackgroundHSLA.innerHTML = lightThemeObj.secondaryBackgroundColor.hslaCode;
    secondaryBackgroundCMYK.innerHTML = lightThemeObj.secondaryBackgroundColor.cmykCode;
  }
  
  function monochromeThemeSetter() {
    primaryHex.innerHTML = monochromeThemeObj.primaryColor.hexCode;
    primaryRGBA.innerHTML = monochromeThemeObj.primaryColor.rgbaCode;
    primaryHSLA.innerHTML = monochromeThemeObj.primaryColor.hslaCode;
    primaryCMYK.innerHTML = monochromeThemeObj.primaryColor.cmykCode;
  
    secondaryHex.innerHTML = monochromeThemeObj.secondaryColor.hexCode;
    secondaryRGBA.innerHTML = monochromeThemeObj.secondaryColor.rgbaCode;
    secondaryHSLA.innerHTML = monochromeThemeObj.secondaryColor.hslaCode;
    secondaryCMYK.innerHTML = monochromeThemeObj.secondaryColor.cmykCode;
        
    primaryBackgroundHex.innerHTML = monochromeThemeObj.primaryBackgroundColor.hexCode;
    primaryBackgroundRGBA.innerHTML = monochromeThemeObj.primaryBackgroundColor.rgbaCode;
    primaryBackgroundHSLA.innerHTML = monochromeThemeObj.primaryBackgroundColor.hslaCode;
    primaryBackgroundCMYK.innerHTML = monochromeThemeObj.primaryBackgroundColor.cmykCode;

    secondaryBackgroundHex.innerHTML = monochromeThemeObj.secondaryBackgroundColor.hexCode;
    secondaryBackgroundRGBA.innerHTML = monochromeThemeObj.secondaryBackgroundColor.rgbaCode;
    secondaryBackgroundHSLA.innerHTML = monochromeThemeObj.secondaryBackgroundColor.hslaCode;
    secondaryBackgroundCMYK.innerHTML = monochromeThemeObj.secondaryBackgroundColor.cmykCode;
  }

  const darkThemeObj = {
    "primaryColor": {
      "hexCode": "#F39C12",
      "rgbaCode": "243, 156, 18, 1",
      "hslaCode": "37, 90%, 51%, 1",
      "cmykCode": "0, 36, 93, 5",
    },
    "secondaryColor": {
      "hexCode": "#337AB7",
      "rgbaCode": "51, 122, 183, 1",
      "hslaCode": "37, 90%, 51%, 1",
      "cmykCode": "0, 36, 93, 5",
    },
    "primaryBackgroundColor": {
      "hexCode": "#444444",
      "rgbaCode": "68, 68, 68, 1",
      "hslaCode": "0, 0%, 27%, 1",
      "cmykCode": "0, 0, 0, 73",
    },
    "secondaryBackgroundColor": {
      "hexCode": "#333333",
      "rgbaCode": "51, 51, 51, 1",
      "hslaCode": "0, 0%, 20%, 1",
      "cmykCode": "0, 0, 0, 80",
    },
  };

  const lightThemeObj = {
    "primaryColor": {
      "hexCode": "#F39C12",
      "rgbaCode": "243, 156, 18, 1",
      "hslaCode": "37, 90%, 51%, 1",
      "cmykCode": "0, 36, 93, 5",
    },
    "secondaryColor": {
      "hexCode": "#337AB7",
      "rgbaCode": "51, 122, 183, 1",
      "hslaCode": "37, 90%, 51%, 1",
      "cmykCode": "0, 36, 93, 5",
    },
    "primaryBackgroundColor": {
      "hexCode": "#AAAAAA",
      "rgbaCode": "170, 170, 170, 1",
      "hslaCode": "0, 0%, 67%, 1",
      "cmykCode": "0, 0, 0, 33",
    },
    "secondaryBackgroundColor": {
      "hexCode": "#888888",
      "rgbaCode": "136, 136, 136, 1",
      "hslaCode": "0, 0%, 53%, 1",
      "cmykCode": "0, 0, 0, 47",
    },
  };

  const monochromeThemeObj = {
    "primaryColor": {
      "hexCode": "#444444",
      "rgbaCode": "68, 68, 68, 1",
      "hslaCode": "0, 0%, 27%, 1",
      "cmykCode": "0, 0, 0, 73",
    },
    "secondaryColor": {
      "hexCode": "#666666",
      "rgbaCode": "102, 102, 102, 1",
      "hslaCode": "0, 0%, 40%, 1",
      "cmykCode": "0, 0, 0, 60",
    },
    "primaryBackgroundColor": {
      "hexCode": "#EEEEEE",
      "rgbaCode": "238, 238, 238, 1",
      "hslaCode": "0, 0%, 93%, 1",
      "cmykCode": "0, 0, 0, 7",
    },
    "secondaryBackgroundColor": {
      "hexCode": "#CCCCCC",
      "rgbaCode": "204, 204, 204, 1",
      "hslaCode": "0, 0%, 80%, 1",
      "cmykCode": "0, 0, 0, 20",
    },
  };

  switch ( currentTheme ) {
    case "dark-theme" : {
      darkThemeSetter();
      break;
    }

    case "light-theme" : {
      lightThemeSetter();
      break;
    }

    case "monochrome-theme" : {
      monochromeThemeSetter();
      break;
    }
    
    default: throw("How is there no theme?!");
  };
};

function repositionTabs () {
  let themeTabs = document.querySelector('.tabs');
  let tableOfContents = document.querySelector('.table-of-contents');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    themeTabs.classList.add('repositioned');
    tableOfContents.classList.add('repositioned');
  } else {
    themeTabs.classList.remove('repositioned');
    tableOfContents.classList.remove('repositioned');
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  selectNewTab();
  colorCodeGenerator();
  window.onscroll = () => {repositionTabs()};
});
