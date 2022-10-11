import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import WhyWeUse from '../components/whyWeUse'
import ClientSection from '../components/clientSection'
import ProductSections from '../components/productSections'
import CtaSection from '../components/ctaSection'
import PortFolio from '../components/portFolio'
import TeamSection from '../components/teamSection'
import ContactSection from '../components/contactSection'
import { Link } from 'react-router-dom'
// import Header from './components/header.js'

export default function Home() {
  return (
    <div>
      <Header />
      {/* <!-- ======= Hero Section ======= --> */}
      <Hero />
      {/* <!-- End Hero --> */}
      <main id='main'>
        {/* <!-- ======= About Section ======= --> */}
        <About />
        {/* <!-- ======= Why Us Section ======= --> */}
        <WhyWeUse />
        {/* <!-- ======= Clients Section ======= --> */}
        <ClientSection />
        {/* <!-- ======= Product Section ======= --> */}
        <ProductSections />
        {/* <!-- ======= Cta Section ======= --> */}
        <CtaSection />
        {/* <!-- ======= Portfolio Section ======= --> */}
        <PortFolio />
        {/* <!-- ======= Team Section ======= --> */}
        <TeamSection />
        {/* <!-- ======= Contact Section ======= --> */}
        <ContactSection />

        <footer id='footer'>
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='footer-info'>
                    <h3>Day</h3>
                    <p>
                      A108 Adam Street <br /> NY 535022, USA
                      {/* // <strong>Phone:</strong> +1 5589 55488 55<br>
                // <strong>Email:</strong> info@example.com<br> */}
                    </p>
                    <div className='social-links mt-3'>
                      <a href='#' className='twitter'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                      <a href='#' className='facebook'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                      <a href='#' className='instagram'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                      <a href='#' className='google-plus'>
                        <i className='bx bxl-skype'></i>
                      </a>
                      <a href='#' className='linkedin'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-2 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Home</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>About us</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Products</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Terms of service</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div className='col-lg-2 col-md-6 footer-links'>
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Web Design</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Web Development</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Product Management</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Marketing</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Graphic Design</a>
                    </li>
                  </ul>
                </div>

                <div className='col-lg-4 col-md-6 footer-newsletter'>
                  <h4>Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action='' method='post'>
                    {/* <input type="email" name="email"><input type="submit" value="Subscribe" /> */}
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='copyright'>
              &copy; Copyright{' '}
              <strong>
                <span>Day</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className='credits'>
              {/* All the links in the footer should remain intact. You can delete the links only if you purchased the pro
              version. Licensing information: https://bootstrapmade.com/license/ Purchase the pro version with working
              PHP/AJAX contact form: https://bootstrapmade.com/day-multipurpose-html-template-for-free/ Designed by{' '} */}
              <a href='https://bootstrapmade.com/'>ReAlfit</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
