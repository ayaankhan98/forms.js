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
      'class': 'form-radio-inline',
    }
  },
  9: {
    'tagName' : 'input',
    'label' : 'Radio 2',
    'attributes' : 
    {
      'type' : 'radio',
      'class': 'form-radio-inline',
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
        "M" : "Mumabai",
        "B" : "Bareilly",
        "A" :"Aligrah",
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
