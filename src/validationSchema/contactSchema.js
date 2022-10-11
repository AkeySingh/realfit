import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
  name: yup.string().required().min(2).max(15).required('Please fill the field'),
  email: yup.string().email().required('Please fill the field'),
  subject: yup.string().required('Please fill the field'),
  message: yup.string().required('Please fill the field'),
})
