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
