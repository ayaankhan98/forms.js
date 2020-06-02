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


  ////////////////////////////////////////////////////////

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


  ///////////////////////////////////////////////////////

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

    createPanel(panelID);
    // console.log(panel);

    for (var component in panel) {

      var componentID = component;
      component = panel[component];
      // console.log(component);
      createComponent(panelID, componentID, component);

    }
    // when a panel is created then compile the panel and plug 
    // it into the DOM based on the panel number and 
    // corrosponding sliding page number
    // such as if the current sliding page number is 4 then the panel 
    // number 4 will be plugged into the DOM and user swithces back and
    // forth the panels then the corrosponding panel should also change

    // const compiledPanel = Handlebars.compile(document.querySelector(`#panel-${panelID}`).innerHTML);
    // // console.log(compiledPanel());
    // const appendForm = document.querySelector(`#${formTagID}`);
    // // console.log(appendForm);
    // const tempTag = document.createElement("div");
    // tempTag.innerHTML = compiledPanel();
    // appendForm.append(tempTag);


    // if (typeof (details[key]) === "object") {
    //   var tagID = parseInt(key);
    //   if (tagID != NaN) {
    //     var element = details[key]["tagName"];
    //     var attributes = details[key]["attributes"];
    //     var label = details[key]["label"];
    //     // console.log(element)
    //     // console.log(label)
    //     // console.log(attributes)
    //     createTag(element, label, attributes, formTagID, config);
    //   }
    // }
    // if (typeof (details[key]) === "object" && typeof (key) != "number") {
    // }
  }
  linkPanels(linkPanel);
  renderPanels(linkPanel);
}

var createPanel = (panelID) => {

  let templateDiv = document.querySelector("#template-div");

  // console.log(templateDiv)

  let panel = document.createElement("script");
  panel.setAttribute("type", "text/x-handlebars-template");
  panel.setAttribute("id", `panel-${panelID}`);

  let tempdiv = document.createElement("div");
  tempdiv.setAttribute("id", `parent-panel-${panelID}`)
  let fieldsetElement = document.createElement("fieldset");
  fieldsetElement.setAttribute("id", `fieldset-panel-${panelID}`)
  tempdiv.setAttribute("class", "maincontent border border-dark rounded p-5 m-5") //
  let fieldsetLegend = document.createElement("legend");
  fieldsetLegend.innerHTML = panelID;
  fieldsetElement.append(fieldsetLegend);
  tempdiv.append(fieldsetElement);


  panel.append(tempdiv);
  templateDiv.append(panel);

  // console.log(templateDiv)
}


var createComponent = (panelID, componentID, componentDetails) => {

  // console.log(componentDetails);

  var panel = document.querySelector(`#fieldset-panel-${panelID}`);

  if (componentDetails["label"] != undefined) {
    var label = document.createElement("label");
    label.setAttribute("for", `${componentDetails["label"]}`);

    var labelSpan = document.createElement("span");
    labelSpan.innerHTML = componentDetails["label"];
    label.append(labelSpan);
  }

  var element = document.createElement(`${componentDetails["tagName"]}`);
  for (let attribute in componentDetails["attributes"]) {
    // console.log(attribute);
    // console.log(componentDetails["attributes"][attribute])

    // Handling select boxes
    if (componentDetails["tagName"] === "select") {
      if (attribute === "options") {
        let options = componentDetails["attributes"]["options"];
        // console.log(options);
        for (let option in options) {
          let optionTag = document.createElement("option");
          optionTag.setAttribute("value", option);
          optionTag.innerHTML = options[option];
          element.append(optionTag);
          // console.log(element);
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

  if (componentDetails["labelPosition"] === undefined) {
    componentDetails["labelPosition"] = "left";
  }
  if (componentDetails["labelPosition"] === "left") {

    // within the same row in two different columns
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let colOne = document.createElement("div");
    colOne.setAttribute("class", "col-md-2");
    let colTwo = document.createElement("div");
    colTwo.setAttribute("class", "col-md-5");
    if (label != undefined) {
      colOne.append(label);
    }
    colTwo.append(element);
    row.append(colOne);
    row.append(colTwo);

    // now this row is a complete component in itself
    // now put this newly created component inside the panel

    panel.append(row);

    // console.log(panel);

  } else if (componentDetails["labelPosition"] === "top") {

    // place the label and corrosponding component in different div
  }

  // console.log(panel)
  // console.log(componentDetails);

}

var linkPanels = (panels) => {

  // console.log(panels.length)

  for (var id in panels) {

    id = parseInt(id);
    // console.log(typeof (id));
    // console.log(`panel-${panels[id]}`)
    const navRow = document.createElement("div");
    navRow.setAttribute("class", "row");

    const c1 = document.createElement("div");
    c1.setAttribute("class", "col-md-5")
    const c2 = document.createElement("div");
    c2.setAttribute("class", "col-md-1")
    const c3 = document.createElement("div");
    c3.setAttribute("class", "col-md-1")
    const c4 = document.createElement("div");
    c4.setAttribute("class", "col-md-2")

    const prev = document.createElement("button");
    const next = document.createElement("button");

    prev.setAttribute("class", "navbtn btn btn-primary btn-sm");
    next.setAttribute("class", "navbtn btn btn-primary btn-sm");

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

    prev.innerText = "<";
    next.innerText = ">";

    c2.append(prev);
    c3.append(next);

    navRow.append(c1);
    navRow.append(c2);
    navRow.append(c3);
    navRow.append(c4);

    const currentPanel = document.querySelector(`#parent-panel-${panels[id]}`);
    if (currentPanel != null) {
      // console.log(currentPanel);
      currentPanel.append(navRow);
    }
  }

}

var renderPanels = (panels) => {

  createAnimation();
  
  for (let id in panels) {
    const compiledPanel = Handlebars.compile(document.querySelector(`#panel-${panels[id]}`).innerHTML);
    // console.log(compiledPanel());
    const appendForm = document.querySelector(`#${formTagID}`);
    // console.log(appendForm);
    const tempTag = document.createElement("div");
    tempTag.innerHTML = compiledPanel();
    appendForm.append(tempTag);
  }

  for(let id in panels) {
    // console.log(panels[id])
    let currnetVisiblePanel = `parent-panel-${panels[id]}`;
    // console.log(currnetVisiblePanel)
    document.querySelector(`#${currnetVisiblePanel}`).hidden = true
  }

  let currnetVisiblePanel = `parent-panel-${panels[0]}`;
  document.querySelector(`#${currnetVisiblePanel}`).hidden = false

  // console.log(currnetVisiblePanel);
  document.addEventListener('click', (event) => {
    // console.log(event.target.className);
    if (event.target.className === "navbtn btn btn-primary btn-sm") {
      // console.log(currnetVisiblePanel)
      // console.log(event.target.dataset.link);
      
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

var createTag = (tagName, labelName, attributes, formTagID, config) => {
  const form = document.querySelector(`#${formTagID}`);

  let label = undefined;
  let row = document.createElement("div");
  row.setAttribute('class', "row");

  if (config["d-left"] != undefined) {
    let dLeft = document.createElement("div");
    dLeft.setAttribute("class", `col-md-${config["d-left"]}`);
    row.append(dLeft);
  }

  let div = document.createElement('div');
  div.setAttribute('class', `col-md-${config["form-width"]}`);
  if (attributes['type'] === 'radio') {
    div.setAttribute('class', `col-md-${config["form-width"]} form-check ml-3`);
  }
  if (labelName != undefined) {
    label = document.createElement('label');
    label.innerHTML = labelName;
  }

  let element = document.createElement(tagName);
  // if (tagName === 'input') { 
  //   element.setAttribute('class', defaultClasses["input"]) 
  // } else if (tagName === 'select') {
  //   element.setAttribute('class', defaultClasses["select"]) 

  // } else if (tagName === 'radio') {
  //   element.setAttribute('class', defaultClasses["radio"]) 

  // } else if (tagName === 'checkbox') {
  //   element.setAttribute('class', defaultClasses["checkbox"]) 
  // }

  for (let attribute in attributes) {
    if (attribute === 'innerHTML') {
      element.innerHTML = attributes[attribute];
    } else if (attribute === 'required') {
      if (attributes[attribute] === "true" || attributes[attribute] === true) {
        element.required = true;
      }
    } else {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }
  if (tagName === "select") {
    let options = attributes["options"];
    for (let option in options) {
      let optionTag = document.createElement('option');
      optionTag.setAttribute('value', option);
      optionTag.innerHTML = options[option];
      element.append(optionTag);
    }
    // options.forEach(option => {
    //   let optionTag = document.createElement('option')
    //   optionTag.innerHTML = option
    //   element.append(optionTag)
    // })
  }
  if (attributes["type"] === 'checkbox' || attributes["type"] == "radio") {
    div.append(element);
    div.append(label);
  } else {
    if (label != undefined) {
      div.append(label);
    }
    div.append(element);
  }
  row.append(div);
  form.append(row);
}
