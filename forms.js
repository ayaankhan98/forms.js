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

var includeHandlebarsJs = () => {
  let head = document.querySelector("head");
  let handlebarsjs = document.createElement("script");
  handlebarsjsSrc = "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js"
  handlebarsjs.setAttribute("src",handlebarsjsSrc);
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
  viewport.setAttribute("name","viewport");
  viewport.setAttribute("content","width=device-width, initial-scale=1, shrink-to-fit=no");
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

  var bodyElement = document.querySelector("body");

  var templateDiv = document.createElement("div");
  templateDiv.setAttribute("id","template-div");

  bodyElement.append(templateDiv);

  for (var panel in details) {

    var panelID = panel;
    panel = details[panel];

    createPanel(panelID);
    // console.log(panel);

    for(var component in panel) {

      var componentID = component;
      component = panel[component];

      // console.log(component);
      createComponent(panelID,componentID,component);
  
      
    }

    // when a panel is created then compile the panel and plug 
    // it into the DOM based on the panel number and 
    // corrosponding sliding page number
    // such as if the current sliding page number is 4 then the panel 
    // number 4 will be plugged into the DOM and user swithces back and
    // forth the panels then the corrosponding panel should also change

    const compiledPanel = Handlebars.compile(document.querySelector(`#panel-${panelID}`).innerHTML);
    // console.log(compiledPanel());
    const appendForm = document.querySelector(`#${formTagID}`);
    console.log(appendForm);
    appendForm.innerHTML = compiledPanel();

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
}

var createPanel = (panelID) => {

  let templateDiv = document.querySelector("#template-div");

  // console.log(templateDiv)

  let panel = document.createElement("script");
  panel.setAttribute("type","text/x-handlebars-template");
  panel.setAttribute("id",`panel-${panelID}`);

  templateDiv.append(panel);

  // console.log(templateDiv)
}


var createComponent = (panelID,componentID,componentDetails) => {

 // console.log(componentDetails);

  var panel = document.querySelector(`#panel-${panelID}`);
  
  
  var label = document.createElement("label");
  label.setAttribute("for",`${componentDetails["label"]}`);

  var labelSpan = document.createElement("span");
  labelSpan.innerHTML = componentDetails["label"];
  label.append(labelSpan);

  var element = document.createElement(`${componentDetails["tagName"]}`);
  for(let attribute in componentDetails["attributes"]) {
    // console.log(attribute);
    // console.log(componentDetails["attributes"][attribute])

    if (attribute === "innerHTML") {
      // for handling buttons
      element.innerHTML = componentDetails["attributes"][attribute];
    } else {
      // for handling things other than button
      element.setAttribute(attribute,componentDetails["attributes"][attribute])
    }
  }


  if (componentDetails["labelPosition"] === "left" ) {

    // within the same row in two different columns
    let row = document.createElement("div");
    row.setAttribute("class","row");
    let colOne = document.createElement("div");
    colOne.setAttribute("class","col-md-2");
    let colTwo = document.createElement("div");
    colTwo.setAttribute("class","col-md-5");
    colOne.append(label);
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
