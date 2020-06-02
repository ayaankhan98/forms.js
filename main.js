var details = {
  "configuration": {
    'form-width': '5',
    'd-left': '2',
  },
  "Personal-Info": {
    1: {
      'tagName': 'input',
      'label': 'First Name',
      'labelPosition': 'left',
      'attributes': {
        'type': 'text',
        'placeholder': 'First Name',
        'class': 'form-group form-control',
        'id': 'name'
      },
    },
    2: {
      'tagName': 'input',
      'label': 'Password',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'password',
        'placeholder': 'Password',
        'class': 'form-group form-control',
      },
    },
    3: {
      'tagName': 'input',
      'label': 'Date of Birth',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'date',
        'placeholder': 'Date Of Birth',
        'class': 'form-group form-control',
      }
    },
    4: {
      'tagName': 'input',
      'label': 'Email',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'email',
        'placeholder': 'test@test.com',
        'class': 'form-group form-control',
      }
    },
    5: {
      'tagName': 'textarea',
      'label': 'Address',
      'labelPosition': 'left',
      'attributes':
      {
        'placeholder': 'Address',
        'class': 'form-group form-control',
        'rows': 6,
      },
    },
    6 : {
      'tagName': 'input',
      'label': 'Email',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'email',
        'placeholder': 'test@test.com',
        'class': 'form-group form-control',
      }
    },
    7 : {
      'tagName': 'input',
      'label': 'Email',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'email',
        'placeholder': 'test@test.com',
        'class': 'form-group form-control',
      }
    },
    8 : {
      'tagName': 'input',
      'label': 'Email',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'email',
        'placeholder': 'test@test.com',
        'class': 'form-group form-control',
      }
    },
    9: {
      'tagName': 'input',
      'label': 'Email',
      'labelPosition': 'left',
      'attributes':
      {
        'type': 'email',
        'placeholder': 'test@test.com',
        'class': 'form-group form-control',
      }
    },
  },
  "Address-Info": {
    1: {
      'tagName': 'input',
      'label': 'Checkbox',
      'labelPosition': "left",
      'attributes':
      {
        'type': 'checkbox',
        'class': 'form-check-inline',
      }
    },
    2: {
      'tagName': 'input',
      'label': 'Accept the Terms and Conditions',
      'labelPosition': "left",
      'attributes':
      {
        'type': 'checkbox',
        'class': 'form-check-inline',
      }
    },
    3: {
      'tagName': 'input',
      'label': 'Radio 1',
      'labelPosition': "left",
      'attributes':
      {
        'type': 'radio',
        'class': 'form-check-input',
        'value': 'radio1',
        'name': 'set1'
      }
    },
    4: {
      'tagName': 'input',
      'label': 'Radio 2',
      'labelPosition': "left",
      'attributes':
      {
        'type': 'radio',
        'class': 'form-check-input',
        'value': 'radio2',
        'name': 'set1'
      }
    },
    5: {
      'tagName': 'select',
      "label": "City",
      "labelPosition": "left",
      'attributes':
      {
        'class': 'form-group form-control',
        'placeholder': 'selectbox',
        'options':
        {
          "D": "Delhi",
          "M": "Mumbai",
          "B": "Bareilly",
          "A": "Aligarh",
        }
      }
    },
    6: {
      'tagName': 'button',
      'label': "button",
      "labelPosition": "left",
      'attributes':
      {
        'class': 'btn btn-dark',
        'innerHTML': 'Submit',
      }
    },
    7: {
      'tagName': 'input',
      "label": "upload Photo",
      'attributes':
      {
        'type': 'file',
        'class': 'mt-2',
      }
    }
  },
  "Home-Info": {
    1: {
      'tagName': 'input',
      "label": "upload Photo",
      'attributes':
      {
        'type': 'file',
        'class': 'mt-2',
      }
    }
  },
}
document.addEventListener('DOMContentLoaded', () => {
  formTagID = 'form-1'
  preSetup()
  readObject(details, formTagID)
})