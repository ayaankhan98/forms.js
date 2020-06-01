# forms.js
A simple light weighted javascript library built on top of bootstrap to dynamically generate responsive forms using json objects

# Status
This is a very basic version of what i am trying to do, currently working on this to make it more robust and useful.

# Example

it is very easy to use all you need is just to include `forms.js` in your `HTML document`

a sample `index.html` would look like

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="./forms.js"></script>
    <script src="./main.js"></script>
  </head>
  <title>Test Page</title>
  <body>
    <div class="container">
      <h1>Test Text</h1>
    </div>
    <form id="form-1">
    <!-- within this tag the dynamically generated forms are plugged -->
    </form>
  </body>
</html>
```

in order to trigger the inbuilt library functions you would need a seprate javascript file that is `main.js` in this case

let's look over the sample `main.js`
```javascript
var details = {
  "configuration" : {
    'form-width' : '4',
    'd-left' : '4',
  },
  1: {
    'tagName': 'input',
    'label' : 'First Name',
    'attributes': {
      'type': 'text',
      'placeholder': 'First Name',
      'class': 'form-group form-control',
      'id' : 'name'
    },
  },
  2: {
    'tagName': 'input',
    'label' : 'Password',
    'attributes':
    {
      'type': 'password',
      'placeholder': 'Password',
      'class': 'form-group form-control',
    },
  },
  3: {
    'tagName' : 'input',
    'label' : 'Date of Birth',
    'attributes' : 
    {
      'type' : 'date',
      'placeholder' : 'Date Of Birth',
      'class' : 'form-group form-control',
    }
  },
  4: {
    'tagName' : 'input',
    'label' : 'Email',
    'attributes' : 
    {
      'type' : 'email',
      'placeholder' : 'test@test.com',
      'class' : 'form-group form-control',
    }
  },
  5: {
    'tagName' : 'textarea',
    'label' : 'Address',
    'attributes' : 
    {
      'placeholder': 'Address',
      'class': 'form-group form-control',
      'rows' : 6,
    }
  },
  6: {
    'tagName' : 'input',
    'label' : 'Checkbox',
    'attributes' : 
    {
      'type' : 'checkbox',
      'class': 'form-check-inline',
    }
  },
  7: {
    'tagName' : 'input',
    'label' : 'Accept the Terms and Conditions',
    'attributes' : 
    {
      'type' : 'checkbox',
      'class': 'form-check-inline',
    }
  },
  8: {
    'tagName' : 'input',
    'label' : 'Radio 1',
    'attributes' : 
    {
      'type' : 'radio',
      'class': 'form-check-input',
      'value' : 'radio1',
      'name' : 'set1'
    }
  },
  9: {
    'tagName' : 'input',
    'label' : 'Radio 2',
    'attributes' : 
    {
      'type' : 'radio',
      'class': 'form-check-input',
      'value' : 'radio2',
      'name' : 'set1'
    }
  },
  10 : {
    'tagName': 'select',
    'attributes' : 
    {
      'class' : 'form-group form-control',
      'placeholder' : 'selectbox',
      'options' : 
      {
        "D" : "Delhi",
        "M" : "Mumbai",
        "B" : "Bareilly",
        "A" : "Aligarh",
      }
    }
  },
  11  : {
    'tagName' : 'submit',
    'attributes' : 
    {
      'class': 'btn btn-dark',
      'innerHTML' : 'Submit',
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  formTagID = 'form-1'
  preSetup()
  readObject(details,formTagID)
})
```
the `JSON` object `details` consitst of the form details based on which the forms will be generated.

The `"configuration"` defines the configuration of form such as `d-left` key defines the position of form from the left side of screen and `form-width` defines the width of form

complete documentaion is in progress along with the development, as this is the very basic version it contains only two functions `preSetup()` and `readObject(JSONObject)`,
the `preSetup()` function will include a bunch of stuff such as `bootstrap`, `jQuery` and `bootstrap.js`, so the user will not have to worry about including Bootstrap explicitly in their web pages. And the function `readObject(JSONObject)` will take a JSON object as a parameter to genrate responsive HTML web forms.

currently this will be able to genrate only
- input fields
  - text
  - number
  - date
  - email
  - password
  - radio
  - checkbox
- text area
- select box

# Goals
- Transforming forms into panel to provide more flexiable controll over large forms
- Add flexible animations for smooth transition effect while switching back and forth the form panels
- Provide more flexible generic idea to implementaion to give more control for the user to modify json in whatever way they want
- Providing flexibility for check fields such as radio and checkboxes

will be more updating soon

# LICENSE
All the content is under MIT License, you are free to do anything with this

# Contributions
Contributions and ideas are welcome as always.