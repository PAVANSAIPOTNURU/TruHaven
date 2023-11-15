import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Users can effortlessly manage their bookings through the app. From itinerary details to check-in/check-out reminders, truHaven keeps users organized and informed throughout their travel journey.</p>
            <br />
            <p>TruHaven rewards its users with a loyalty program, offering discounts, exclusive deals, and perks for frequent bookings. This incentivizes users to stick with truHaven for their future travel needs.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p> Insider Tips for Budget-Friendly Travel: Save Big with truHaven!</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2023</span>
              </li>
              <li>
                <p> truHaven Cares: Sustainable Stays for Eco-Conscious Travelers</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2023</span>
              </li>
              <li>
                <p>We love hearing from our truHaven community! </p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Stay tuned for more exciting updates and travel inspiration on TruHaven. Your journey to exceptional stays starts here!</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer