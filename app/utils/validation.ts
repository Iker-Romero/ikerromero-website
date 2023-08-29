import { RegisterOptions } from 'react-hook-form'

const validations = {
  predefined: {
    name: {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters'
      },
      maxLength: {
        value: 50,
        message: 'Name must not exceed 50 characters'
      },
      pattern: {
        value: /^[A-Za-z\s]+$/, // Only letters and spaces are allowed
        message: 'Name must contain only letters and spaces'
      }
    },
    message: {
      required: 'Message is required',
      minLength: {
        value: 10,
        message: 'Message must be at least 10 characters'
      },
      maxLength: {
        value: 500,
        message: 'Message must not exceed 500 characters'
      }
    },
    privacyPolicy: {
      required: 'You must accept the privacy policy to proceed'
    }
  },
  text: { required: 'This field is required' },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address'
    }
  },
  tel: {
    required: 'Phone number is required',
    pattern: {
      value: /^[0-9]{4,15}$/,
      message: 'Phone number must be between 4 and 15 digits'
    }
  },
  textarea: {
    minLength: {
      value: 10,
      message: 'Text must be at least 10 characters'
    },
    maxLength: {
      value: 500,
      message: 'Text must not exceed 500 characters'
    }
  },
  checkbox: { required: 'Checkbox is required' }
}

type getValidationParams = {
  type: 'text' | 'email' | 'tel' | 'textarea' | 'checkbox'
  validation?: 'name' | 'message' | 'privacyPolicy'
  required?: boolean
}

export const getValidation = ({
  type,
  validation,
  required
}: getValidationParams) => {
  const registerOptions: RegisterOptions = {}

  const validationType = validations[type]

  if ('pattern' in validationType) {
    registerOptions.pattern = validationType.pattern
  }

  if (required && 'required' in validationType) {
    registerOptions.required = validationType.required
  }

  if (validation) {
    Object.assign(registerOptions, validations.predefined[validation])
  }

  return registerOptions
}
