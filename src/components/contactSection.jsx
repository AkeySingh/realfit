import React from 'react'
import { useFormik } from 'formik'
import { ContactSchema } from '../validationSchema/contactSchema'
import axios from 'axios'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactSection() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      const baseURL = 'http://localhost:3000/register'
      axios({
        method: 'post',
        url: baseURL,
        data: {
          name: 'akey singh',
          phone: '8765456789',
          work: 'web3',
          password: '9877890',
          email: 'ake@9ddgmail.com',
        },
        header: {
          'Content-Type': 'application/json',
        },
      }).then((res) => console.log(res))
    },
  })

  return (
    <>
      <section id='contact' className='contact'>
        <div className='container'>
          <div className='section-title'>
            <span className='error-span'>Contact</span>
            <h2>Contact</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </div>

          <div className='row' data-aos='fade-up'>
            <div className='col-lg-6'>
              <div className='info-box mb-4'>
                <i className='bx bx-map'></i>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='info-box  mb-4'>
                <i className='bx bx-envelope'></i>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='info-box  mb-4'>
                <i className='bx bx-phone-call'></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className='row' data-aos='fade-up'>
            <div className='col-lg-6 '>
              {/* <iframe
                className='mb-4 mb-lg-0'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
                frameborder='0'
                style='border:0; width: 100%; height: 384px;'
                allowfullscreen
              ></iframe> */}
            </div>

            <div className='col-lg-6'>
              <form onSubmit={(e) => handleSubmit(e)} role='form' className='php-email-form'>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      onChange={handleChange}
                      value={values.name}
                      placeholder='Your Name'
                    />
                    <span className='error-span'> {errors.name && touched.name ? errors.name : ''}</span>
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input
                      type='text'
                      className='form-control'
                      name='email'
                      id='email'
                      onChange={handleChange}
                      value={values.email}
                      placeholder='Your Email'
                    />
                    <span className='error-span'> {errors.email && touched.email ? errors.email : ''}</span>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    onChange={handleChange}
                    value={values.subject}
                    placeholder='Subject'
                  />

                  <span className='error-span'> {errors.subject && touched.subject ? errors.subject : ''}</span>
                </div>
                <div className='form-group mt-3'>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    onChange={handleChange}
                    value={values.message}
                    placeholder='Message'
                  ></textarea>

                  <span className='error-span'> {errors.message && touched.message ? errors.message : ''}</span>
                </div>
                <div className='my-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message'></div>
                  <div className='sent-message'>Your message has been sent. Thank you!</div>
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
