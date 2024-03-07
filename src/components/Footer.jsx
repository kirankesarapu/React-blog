import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='Footer_Container'>
        <div className='Footer_data'>
            <h2>Support</h2>
            <ol>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
            </ol>
        </div>
        <div className='Footer_data'>
            <h2>Support</h2>
            <ol>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
            </ol>
        </div>
        <div className='Footer_data'>
            <h2>Support</h2>
            <ol>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
            </ol>
        </div>
        <div className='Footer_data'>
            <h2>Support</h2>
            <ol>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
            </ol>
        </div>

        <div className='Subscibe'>
            <h4>Please Do Subscribe to Our Page for all the Latest News</h4>
        </div>
        <form className='Form'>
            <input className='email' type='email' placeholder='Enter email'/>
            <button className='Button_subscribe'>Subscribe</button>
        </form>
        <div className='Social_icons'>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
        </div>
    </div>
  )
}

export default Footer