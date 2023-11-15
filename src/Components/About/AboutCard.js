import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>TruHaven is a cutting-edge hotel booking application designed to redefine the way travelers experience comfort and convenience. With truHaven, users can seamlessly discover, book, and manage their hotel stays with ease.</p>
          <p>TruHaven boasts a user-friendly interface, ensuring a smooth and hassle-free experience for users of all levels of tech-savviness. The app's sleek design enhances navigation and makes hotel booking a breeze.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard