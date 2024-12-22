import React from 'react';
import instagramLogo from './instagram.png'; // Ensure the file is in the same folder as Footer.js
import facebookLogo from './facebook.png'; // Corrected variable name
import videoLogo from './video.png';
import './Footer.css';

export default function Footer() {
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', padding: '10px' }} className='footer'>
            <a href="instagram.com">
                <img src={instagramLogo} alt="Instagram" style={{ width: '25px', height: '25px' }} />
            </a>
            <a href="facebook.com">
                <img src={facebookLogo} alt="Facebook" style={{ width: '25px', height: '25px' }} />
            </a>
            <a href="youtube.com">
                <img src={videoLogo} alt="YouTube" style={{ width: '27px', height: '27px' }} />
            </a> <br />
            <hr />
            <a href="/" style={{color:'grey'}}>NutriFuel</a>
        </div>
    );
}
