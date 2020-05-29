# forms.js
A simple light weighted javascript library built on top of bootstrap to dynamically generate responsive forms using json objects

# Status
This is a very basic version of what i am trying to do, currently working on this to make it more robust and useful.

# Example

it is very easy to use all you need is just to include `forms.js` in your `HTML document`

a sample `index.html` would look like

```
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
```
var details = {
  1: {
    'tagName': 'input',
    'label' : 'First Name',
    'attributes': {
      'type': 'text',
      'placeholder': 'First Name',
      'class': 'form-group form-control',
    },
  },
  2: {
    'tagName': 'input',
    'label' : 'Mobile',
    'attributes':
    {
      'type': 'number',
      'placeholder': 'Mobile Number',
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
    'tagName' : 'submit',
    'attributes' : 
    {
      'class': 'btn btn-dark',
      'innerHTML' : 'Submit',
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  preSetup()
  readObject(details)
})
```
the `JSON` object `details` consitst of the form details based on which the forms will be generated.

complete documentaion is in progress along with the development, as this is the very basic version it contains only two functions `preSetup()` and `readObject(JSONObject)`,
the `preSetup()` function will include a bunch of stuff such as `bootstrap`, `jQuery` and `bootstrap.js`, so the user will not have to worry about including Bootstrap explicitly in their web pages. And the function `readObject(JSONObject)` will take a JSON object as a parameter to genrate responsive HTML web forms.

currently this will be able to genrate only
- input text fields
- text area
- checkbox
- radio

# Goals
will be updating soon

# LICENSE
All the content is under MIT License, you are free to do anything with this