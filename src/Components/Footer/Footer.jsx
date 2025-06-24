import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Fotter = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target='blank'>
          <img src={youtube_icon} alt="" />
        </a>
          <img src={twitter_icon} alt="" />
        <a href="https://www.instagram.com/" target='blank'>
          <img src={instagram_icon} alt="" />
        </a>
          <img src={facebook_icon} alt="" />
      </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>© 2025 Your Name or Company Name. All rights reserved.</p>
    </div>
  )
}

export default Fotter