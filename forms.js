/**
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




// var defaultClasses = {
//   'input': 'form-group form-control',
//   'select': 'form-group form-control',
//   'radio': 'form-check-input',
//   'checkbox': 'form-check-input',
// }


var preSetup = () => {
  let bootstrap = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  let integrityValue = "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  let head = document.querySelector('head')
  let bootstrapLink = document.createElement('link')
  bootstrapLink.setAttribute('rel', 'stylesheet')
  bootstrapLink.setAttribute('href', bootstrap);
  bootstrapLink.setAttribute('integrity', integrityValue)
  bootstrapLink.setAttribute('crossorigin', 'anonymous')

  let script1 = document.createElement('script')
  let script1Src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
  let script1IntregityValue = 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
  script1.setAttribute('src', script1Src)
  script1.setAttribute('integrity', script1IntregityValue)
  script1.setAttribute('crossorigin', 'anonymous')

  let script2 = document.createElement('script')
  let script2Src = 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
  let script2IntegrityValue = 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
  script2.setAttribute('src', script2Src)
  script2.setAttribute('integrity', script2IntegrityValue)
  script2.setAttribute('crossorigin', 'anonymous')

  let script3 = document.createElement('script')
  let script3Src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
  let script3IntegrityValue = 'sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
  script3.setAttribute('src', script3Src)
  script3.setAttribute('integrity', script3IntegrityValue)
  script3.setAttribute('crossorigin', 'anonymous')

  head.append(bootstrapLink)
  head.append(script1)
  head.append(script2)
  head.append(script3)
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
      }`
    }
    if (formTagID === undefined) {
      throw `Error no formTagID found`
    }
  }
  catch (error) {
    console.log(error)
    return;
  }
  let config = details["configuration"]
  delete (details["configuration"])
  for (var key in details) {
    if (typeof (details[key]) === "object") {
      var tagID = parseInt(key)
      if (tagID != NaN) {
        var element = details[key]["tagName"]
        var attributes = details[key]["attributes"]
        var label = details[key]["label"]
        // console.log(element)
        // console.log(label)
        // console.log(attributes)
        createTag(element, label, attributes, formTagID, config)
      }
    }
    // if (typeof (details[key]) === "object" && typeof (key) != "number") {
    // }
  }
}

var createTag = (tagName, labelName, attributes, formTagID, config) => {
  const form = document.querySelector(`#${formTagID}`)

  let label = undefined
  let row = document.createElement('div')
  row.setAttribute('class', 'row')

  if (config['d-left'] != undefined) {
    let dLeft = document.createElement('div')
    dLeft.setAttribute('class', `col-md-${config['d-left']}`)
    row.append(dLeft)
  }

  let div = document.createElement('div')
  div.setAttribute('class', `col-md-${config["form-width"]}`)
  if (attributes['type'] === 'radio') {
    div.setAttribute('class', `col-md-${config["form-width"]} form-check ml-3`)
  }
  if (labelName != undefined) {
    label = document.createElement('label')
    label.innerHTML = labelName
  }

  let element = document.createElement(tagName)
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
      element.innerHTML = attributes[attribute]
    } else if (attribute === 'required') {
      if (attributes[attribute] === "true" || attributes[attribute] === true) {
        element.required = true
      }
    } else {
      element.setAttribute(attribute, attributes[attribute])
    }
  }
  if (tagName === "select") {
    let options = attributes["options"]
    for (let option in options) {
      let optionTag = document.createElement('option')
      optionTag.setAttribute('value', option)
      optionTag.innerHTML = options[option]
      element.append(optionTag)
    }
    // options.forEach(option => {
    //   let optionTag = document.createElement('option')
    //   optionTag.innerHTML = option
    //   element.append(optionTag)
    // })
  }
  if (attributes["type"] === 'checkbox' || attributes["type"] == "radio") {
    div.append(element)
    div.append(label)
  } else {
    if (label != undefined) {
      div.append(label)
    }
    div.append(element)
  }
  row.append(div)
  form.append(row)
}
