/*
 *    @license
 *    MIT License
 *    
 *    Copyright (c) 2020 Ayaan Khan
 *    Permission is hereby granted, free of charge, to any person obtaining a copy
 *    of this software and associated documentation files (the "Software"), to deal
 *    in the Software without restriction, including without limitation the rights
 *    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *    copies of the Software, and to permit persons to whom the Software is
 *    furnished to do so, subject to the following conditions:
 *    
 *    The above copyright notice and this permission notice shall be included in all
 *    copies or substantial portions of the Software.
 *    
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 * 
 * 
*/

var defaultConfig = {
  "labelPosition": "left",
}

var includeHandlebarsJs = () => {
  let head = document.querySelector("head");
  let handlebarsjs = document.createElement("script");
  handlebarsjsSrc = "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js"
  handlebarsjs.setAttribute("src", handlebarsjsSrc);
  head.append(handlebarsjs);
}

var includeJQuery = () => {
  let head = document.querySelector("head");
  let script1 = document.createElement("script");
  let script1Src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
  let script1IntregityValue = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
  script1.setAttribute("src", script1Src);
  script1.setAttribute("integrity", script1IntregityValue);
  script1.setAttribute("crossorigin", "anonymous");
  head.append(script1);
}

var includeBootsrapJs = () => {
  let head = document.querySelector("head");
  let script3 = document.createElement("script");
  let script3Src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  let script3IntegrityValue = "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI";
  script3.setAttribute("src", script3Src);
  script3.setAttribute("integrity", script3IntegrityValue);
  script3.setAttribute("crossorigin", "anonymous");
  head.append(script3);
}

var includePopperJs = () => {
  let head = document.querySelector("head");
  let script2 = document.createElement("script");
  let script2Src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
  let script2IntegrityValue = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo";
  script2.setAttribute("src", script2Src);
  script2.setAttribute("integrity", script2IntegrityValue);
  script2.setAttribute("crossorigin", "anonymous");
  head.append(script2);
}

var includeBootstrapCss = () => {
  let head = document.querySelector("head");
  let bootstrap = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
  let integrityValue = "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk";
  let bootstrapLink = document.createElement("link");
  bootstrapLink.setAttribute("rel", "stylesheet");
  bootstrapLink.setAttribute("href", bootstrap);
  bootstrapLink.setAttribute("integrity", integrityValue);
  bootstrapLink.setAttribute("crossorigin", "anonymous");
  head.append(bootstrapLink);
}

var setViewPort = () => {
  let head = document.querySelector("head");
  let viewport = document.createElement("meta");
  viewport.setAttribute("name", "viewport");
  viewport.setAttribute("content", "width=device-width, initial-scale=1, shrink-to-fit=no");
  head.append(viewport);
}

var preSetup = () => {
  setViewPort();
  includeJQuery();
  includeBootstrapCss();
  includePopperJs();
  includeBootsrapJs();
  includeHandlebarsJs();
}

var readObject = (details, formTagID) => {
  try {
    if (details["configuration"] === undefined) {
      throw `Error : No configuration found
        define configurations in JSON object
        {
          "configuration" : {
            ....
          }
      }`;
    }
    if (formTagID === undefined) {
      throw `Error no formTagID found`;
    }
  }
  catch (error) {
    console.log(error);
    return;
  }
  let config = details["configuration"];
  delete (details["configuration"]);
  // taking panels out to build linkPanel array
  var linkPanel = [];
  for (p in details) {
    linkPanel.push(p);
  }
  var bodyElement = document.querySelector("body");
  var templateDiv = document.createElement("div");
  templateDiv.setAttribute("id", "template-div");

  bodyElement.append(templateDiv);

  for (var panel in details) {

    var panelID = panel;
    panel = details[panel];

    createPanel(panelID, config);

    for (var component in panel) {
      var componentID = component;
      component = panel[component];
      createComponent(panelID, componentID, component, config);
    }
  }
  linkPanels(linkPanel);
  renderPanels(linkPanel);
}

var createPanel = (panelID, config) => {
  let templateDiv = document.querySelector("#template-div");
  let panel = document.createElement("script");
  panel.setAttribute("type", "text/x-handlebars-template");
  panel.setAttribute("id", `panel-${panelID}`);

  let internalPanelContainer = document.createElement("div");
  internalPanelContainer.setAttribute("class", "row");

  let panelLeftMargin = document.createElement("div");
  panelLeftMargin.setAttribute("class", `col-md-${config["d-left"]}`); // left margin for form

  internalPanelContainer.append(panelLeftMargin);

  let tempdiv = document.createElement("div");
  tempdiv.setAttribute("id", `parent-panel-${panelID}`);

  let panelContentContainer = document.createElement("div");
  panelContentContainer.setAttribute("class", `col-md-${config["form-width"]}`); // form-size

  let fieldsetElement = document.createElement("fieldset");
  fieldsetElement.setAttribute("id", `fieldset-panel-${panelID}`)
  tempdiv.setAttribute("class", "maincontent rounded p-5 m-5") //

  let hr = document.createElement("hr");
  
  let fieldsetLegend = document.createElement("legend");
  fieldsetLegend.setAttribute("class","mb-2");
  fieldsetLegend.innerHTML = panelID;
  fieldsetElement.append(fieldsetLegend);
  fieldsetElement.append(hr);
  tempdiv.append(fieldsetElement);
  panelContentContainer.append(tempdiv)

  internalPanelContainer.append(panelContentContainer);

  panel.append(internalPanelContainer);
  templateDiv.append(panel);
}


var createComponent = (panelID, componentID, componentDetails, config) => {
  // setting defaults at the top for consistency 
  if (componentDetails["labelPosition"] === undefined) {
    // default label position is left
    componentDetails["labelPosition"] = "left";
  }
  var panel = document.querySelector(`#fieldset-panel-${panelID}`);
  if (componentDetails["label"] != undefined) {
    var label = document.createElement("label");
    label.setAttribute("for", `${componentDetails["label"]}`);
    var labelSpan = document.createElement("span");
    if (componentDetails["tooltip"] != undefined) {
      labelSpan.setAttribute("data-toggle", "tooltip");
      labelSpan.setAttribute("title", `${componentDetails["tooltip"]}`)
    }
    labelSpan.innerHTML = componentDetails["label"];

    label.append(labelSpan);
  }
  if (componentDetails["tagName"] === "input" && componentDetails["attributes"]["type"] === "radio" || componentDetails["attributes"]["type"] === "checkbox") {
    let options = componentDetails["attributes"]["options"];
    let parentRadiodiv = document.createElement("div");
    parentRadiodiv.setAttribute("class", "row");

    let col1 = document.createElement("div");
    let col2 = document.createElement("div");

    col1.setAttribute("class", "col-md-2");
    col2.setAttribute("class", "col-md-5");

    parentRadiodiv.append(col1);
    parentRadiodiv.append(col2);

    for (let option in options) {
      let radioLabel = document.createElement("span");
      radioLabel.innerHTML = options[option];
      let radio = document.createElement("input");
      radio.setAttribute("type", `${componentDetails["attributes"]["type"]}`);
      radio.setAttribute("name", componentDetails["name"]);

      let radiodiv = document.createElement("div");
      radiodiv.setAttribute("class", "row");

      let internalCol1 = document.createElement("div");
      let internalCol2 = document.createElement("div");

      internalCol1.setAttribute("class", "col-md-1");
      internalCol2.setAttribute("class", "col-md-6");

      internalCol1.append(radio);
      internalCol2.append(radioLabel);

      radiodiv.append(internalCol1);
      radiodiv.append(internalCol2);

      col2.append(radiodiv);
    }
    if (label != undefined) {
      radioMainLabel = document.createElement("div");
      radioMainLabel.setAttribute("class", "row pl-3");
      radioMainLabel.append(label);
      col1.append(radioMainLabel);
    }

    panel.append(parentRadiodiv);
    return;
  }

  var element = document.createElement(`${componentDetails["tagName"]}`);
  for (let attribute in componentDetails["attributes"]) {
    // Handling select boxes
    if (componentDetails["tagName"] === "select") {
      if (attribute === "options") {
        let options = componentDetails["attributes"]["options"];
        for (let option in options) {
          let optionTag = document.createElement("option");
          optionTag.setAttribute("value", option);
          optionTag.innerHTML = options[option];
          element.append(optionTag);
        }
      }
    }

    if (attribute === "innerHTML") {
      // for handling buttons
      element.innerHTML = componentDetails["attributes"][attribute];
    } else {
      // for handling things other than button
      element.setAttribute(attribute, componentDetails["attributes"][attribute])
    }
  }


  if (componentDetails["labelPosition"] === "left") {

    // within the same row in two different columns
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let colOne = document.createElement("div");
    colOne.setAttribute("class", "col-md-2");
    let colTwo = document.createElement("div");
    colTwo.setAttribute("class", `col-md-${parseInt(config["form-width"]) - 2}`);
    if (label != undefined) {
      colOne.append(label);
    }
    colTwo.append(element);
    row.append(colOne);
    row.append(colTwo);

    // now this row is a complete component in itself
    // now put this newly created component inside the panel
    
    panel.append(row);
  } else if (componentDetails["labelPosition"] === "top") {

    // place the label and corrosponding component in different div
    // console.log("true");

    let divCombie = document.createElement("div");
    divCombie.setAttribute("class", `col-md-${config["form-width"]}`);
    let row1 = document.createElement("div");
    let row2 = document.createElement("div");
    row1.setAttribute("class", `col-md-${config["form-width"]}`);
    row2.setAttribute("class", `col-md-${config["form-width"]}`);
    if (label != undefined) {
      row1.append(label);
    }
    row2.append(element);

    divCombie.append(row1);
    divCombie.append(row2);
    panel.append(divCombie);
  }
}

var linkPanels = (panels) => {
  for (var id in panels) {

    id = parseInt(id);
    const navRow = document.createElement("div");
    navRow.setAttribute("class", "row mx-auto");

    const c1 = document.createElement("div");
    c1.setAttribute("class", "col-md-5 m-1")
    const c2 = document.createElement("div");
    c2.setAttribute("class", "col-md-2 m-1")
    const c3 = document.createElement("div");
    c3.setAttribute("class", "col-md-5 m-1")
    const c4 = document.createElement("div");
    c4.setAttribute("class", "col-md-1")

    const prev = document.createElement("button");
    const next = document.createElement("button");

    prev.setAttribute("class", "navbtn btn btn-primary btn-sm m-2");
    next.setAttribute("class", "navbtn btn btn-primary btn-sm m-2");
    prev.setAttribute("data-identify", "navbtn");
    next.setAttribute("data-identify", "navbtn")

    if (id === 0) {
      prev.setAttribute("data-link", `panel-${panels[panels.length - 1]}`);
    } else {
      prev.setAttribute("data-link", `panel-${panels[id - 1]}`);
    }
    if (id === panels.length - 1) {
      next.setAttribute("data-link", `panel-${panels[0]}`);
    } else {
      next.setAttribute("data-link", `panel-${panels[id + 1]}`);
    }

    prev.innerText = "Prev";
    next.innerText = "Next";

    c2.append(prev);
    c2.append(next);

    navRow.append(c1);
    navRow.append(c2);
    navRow.append(c3);

    const currentPanel = document.querySelector(`#parent-panel-${panels[id]}`);
    if (currentPanel != null) {
      currentPanel.append(navRow);
    }
  }

}

var renderPanels = (panels) => {
  createAnimation();

  for (let id in panels) {
    const compiledPanel = Handlebars.compile(document.querySelector(`#panel-${panels[id]}`).innerHTML);
    const appendForm = document.querySelector(`#${formTagID}`);
    const tempTag = document.createElement("div");
    tempTag.innerHTML = compiledPanel();
    appendForm.append(tempTag);
  }

  for (let id in panels) {
    let currnetVisiblePanel = `parent-panel-${panels[id]}`;
    document.querySelector(`#${currnetVisiblePanel}`).hidden = true
  }

  let currnetVisiblePanel = `parent-panel-${panels[0]}`;
  document.querySelector(`#${currnetVisiblePanel}`).hidden = false

  document.addEventListener('click', (event) => {
    if (event.target.dataset.identify === "navbtn") {
      document.querySelector(`#${currnetVisiblePanel}`).hidden = true;
      document.querySelector(`#parent-${event.target.dataset.link}`).hidden = false;
      currnetVisiblePanel = `parent-${event.target.dataset.link}`;
      event.preventDefault();
    }
  });

}


var createAnimation = () => {
  let head = document.querySelector("head");
  let styleTag = document.createElement("style");
  styleTag.innerHTML = `@keyframes appear {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
.maincontent{
  background-color: white;
  position: relative;
  animation-name: appear;
  animation-duration: 1500ms;
  animation-fill-mode: forwards;
}`

  head.append(styleTag);
}