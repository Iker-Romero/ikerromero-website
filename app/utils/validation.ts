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
      required: 'Message is required'
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
      value: /^[0-9]{10}$/,
      message: 'Invalid phone number'
    }
  },
  textarea: {
    minLength: {
      value: 10,
      message: 'Message must be at least 10 characters'
    },
    maxLength: {
      value: 500,
      message: 'Message must not exceed 500 characters'
    }
  }
}

type getValidationParams = {
  type: 'text' | 'email' | 'tel' | 'textarea'
  validation?: 'name' | 'message'
  required?: boolean
}

export const getValidation = ({
  type,
  validation,
  required
}: getValidationParams) => {
  let registerOptions: RegisterOptions = {}

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
