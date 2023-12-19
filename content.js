let iframe;
let defaultContent;
let loop = true;


document.addEventListener("DOMContentLoaded", () => {
  findIframe()
})
document.addEventListener("load", () => {
  findIframe()
})

document.addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains("hKbpmp") || e.target.classList.contains("fKToqe")) {
    reloadPage()
  }
});
let reloadPage = () => {
  setTimeout(() => {
    location.reload()
  }, 300)
};



function findIframe() {
  iframe = document.querySelector('#__max___max_mediation___max___max_mediation_analyze_performance');
  if (iframe) {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      if (loop) {
        updateValues();
      } else {
        clearInterval(intervalID);
      }
    }, 100);

    defaultContent = iframe.contentDocument;

    iframe.contentDocument.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.classList.contains("jgTLsV")) {
        reloadPage();
      } else {
        let jgTLsVContainer = targetElement.closest(".jgTLsV");
        if (jgTLsVContainer !== null) {
          reloadPage();
        }
      }

      if (targetElement.textContent !== "Custom" && targetElement.textContent !== "Filter" && targetElement.textContent !== "Compare") {
        let updateList = ["iOHoKd", "sc-frDJqD", "fHTCfh"];
        updateList.forEach((clickId) => {
          if (targetElement.classList.contains(clickId)) {
            reloadPage();
            console.log(targetElement);
          }
        });
      }
    });
  }
}

let intervalID = setInterval(findIframe, 1000);

const updateValues = () => {
  const iframe = document.querySelector('#__max___max_mediation___max___max_mediation_analyze_performance');

  if (iframe) {
    const contentDocument = iframe.contentDocument;
    const tableElement = contentDocument?.querySelector('.ReactTable > table');
    const topValues = contentDocument?.querySelectorAll(".sc-sVRsr .gbMOVQ");

    const applyDoubling = (elements) => {
      const elementsArray = Array.from(elements);

      for (let i = 0; i < elementsArray.length; i += 4) {
        const row = elementsArray.slice(i, i + 4);

        const column2 = row[1];
        const column3 = row[2];
        column2.textContent = doublingWithString(column2.textContent);
        column3.textContent = doublingMiddleTopValue(column3.textContent);
      }
    };

    const applyDoublingV2 = (elements) => {
      elements.forEach((x, index) => {
        if (index === 0) {
          x.textContent = doublingWithString(x.textContent);
        } else if (index === 1) {
          x.textContent = doublingMiddleTopValue(x.textContent);
        }
      });
    };

    const applyDoublingV3 = (elements) => {
      elements.forEach((x, index) => {
        if (index === 1) {
          x.textContent = doublingWithString(x.textContent);
        } else if (index === 2) {
          x.textContent = doublingMiddleTopValue(x.textContent);
        }
      });
    };



    if (loop && topValues.length > 0) {
      if (tableElement) {
        const tbodyElements = tableElement.querySelectorAll("tbody tr td");
        const tfootElements = tableElement.querySelectorAll("tfoot tr td");
        applyDoublingV2(topValues);
        applyDoubling(tbodyElements);
        applyDoublingV3(tfootElements);
        loop = false;
      } else {
        applyDoublingV2(topValues);
        loop = false;
      }
    }
  }
};


let doublingWithString = (textContent) => {
  let metinWithoutDolar = textContent.replace('$', '').replace(',', '');
  let sayi = parseFloat(metinWithoutDolar);
  let result = (sayi * 0.66).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
  return "$" + result;
};

let doublingWithoutString = (textContent) => {
  let numericValue = parseFloat(textContent.replace(',', ''));

  if (!isNaN(numericValue)) {
    let metinWithoutDolar = textContent.replace('$', '').replace(',', '');
    let sayi = parseFloat(metinWithoutDolar);
    let result = (Math.round(sayi * 0.66 * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 });
    return result;
  } else {
    return textContent;
  }
};

let doublingMiddleTopValue = (textContent) => {
  let metinWithoutDolar = textContent.replace('$', '').replace(/\.|,/g, '');
  let sayi = parseFloat(metinWithoutDolar);
  let result = Math.round(sayi * 0.66);
  let formattedResult = result.toLocaleString('en-US');
  let newFormat = formattedResult.replace(/,/g, "");

  return newFormat;
};


