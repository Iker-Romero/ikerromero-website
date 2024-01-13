import { RegisterOptions } from 'react-hook-form'

const validations = {
  predefined: {
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
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address'
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
  type: 'email' | 'textarea' | 'checkbox'
  validation?: 'message' | 'privacyPolicy'
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
