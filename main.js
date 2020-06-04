var details = {
  "configuration": {
    'form-width': '8',
    'd-left': '3',
  },
  "Personal-Info-Left": {
    1: {
      'tagName': 'input', 
      'label': 'First Name',
      'labelPosition': 'left',
      'tooltip' : "Type your full name",
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
      'tooltip' : `password must contain
      more than 8 characters
      including symbols like @,#,* etc
      including numbers 1,2,3,4 etc
      and alphabets a,b,c,d,A,B,D etc.
      `,
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
      'tooltip' : 'type date of birth in DD/MM/YY',
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
    6: {
      'tagName': 'input',
      'label': 'Language of Choice',
      'labelPosition': "left",
      'name': 'lang',
      'attributes':
      {
        'type': 'radio',
        'class': 'form-check-input',
        'options': {
          "c" : "C",
          'cpp': 'C++',
          'rst': 'Rust',
          'java' : "Java",
          "js" : "JavaScript",
          "py" : "Python",
          "ju" : "Julia",
          "ex" : "Elixr"
        }
      }
    },
    7: {
      'tagName': 'input',
      'label': 'Checkbox',
      'labelPosition': "left",
      'attributes':
      {
        'type': 'checkbox',
        'class': 'form-check-inline',
      }
    },
  },
  "Personal-Info-Top": {
    1: {
      'tagName': 'input',
      'label': 'First Name',
      'labelPosition': 'top',
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
      'labelPosition': 'top',
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
      'labelPosition': 'top',
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
      'labelPosition': 'top',
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
      'labelPosition': 'top',
      'attributes':
      {
        'placeholder': 'Address',
        'class': 'form-group form-control',
        'rows': 6,
      },
    },
    6: {
      'tagName': 'input',
      'label': 'Gender',
      'labelPosition': "top",
      'name': 'gender',
      'attributes':
      {
        'type': 'radio',
        'class': 'form-check-input',
        'options': {
          'M': 'Male',
          'F': 'Female'
        }
      }
    },
  },
  "Address-Info": {
    1: {
      'tagName': 'input',
      'label': 'Language',
      'labelPosition': "top",
      'name': 'gender',
      'attributes':
      {
        'type': 'checkbox',
        'class': 'form-check-input',
        'options': {
          'cpp': 'C++',
          'py': 'Python',
          'java' : "Java",
          "js" : "JavaScript",
          'rst' : "rust",
          "julis" : "Julia",
          "cs" : "C#"
        }
      }
    },
    2: {
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
    3: {
      'tagName': 'input',
      "label": "upload Photo",
      "labelPosition": "left",
      'attributes':
      {
        'type': 'file',
        'class': 'mb-4',
      }
    },
    4: {
      'tagName': 'button',
      "labelPosition": "left",
      'attributes':
      {
        'class': 'btn btn-dark',
        'innerHTML': 'Submit',
      }
    },
  },
  "Home-Info": {
    1: {
      'tagName': 'input',
      "label": "upload Photo",
      "labelPosition": "top",
      'attributes':
      {
        'type': 'file',
        'class': "",
      }
    }
  },
}
document.addEventListener('DOMContentLoaded', () => {
  formTagID = 'form-1'
  preSetup()
  readObject(details, formTagID)
})