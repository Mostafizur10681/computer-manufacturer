import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import facebook from '../../../assets/icon/facebook.png';
import whatapp from '../../../assets/icon/whatsapp.png';
import instagram from '../../../assets/icon/instgram.jpg';


const Footer = () => {
    return (
        <footer>
            <div class="footer p-12 bg-blue-900 text-base-content">
                <div className='text-white'>
                    <img width='70px' height='70px' src={logo} alt="" srcset="" />
                    <p>Gadgets
                        <br />
                        Providing reliable tech since 1992</p>
                    <div class="grid grid-flow-col gap-4">
                        <Link to='/'><img src={facebook} alt={facebook} srcset="" /></Link>
                        <Link to='/'><img src={instagram} alt={instagram} srcset="" /></Link>
                        <Link to='/'><img src={whatapp} alt={whatapp} srcset="" /></Link>
                    </div>
                </div>
                <div className='text-white'>
                    <span class="footer-title">Services</span>
                    <Link to='/' class="link link-hover">Branding</Link>
                    <Link to='/' class="link link-hover">Design</Link>
                    <Link to='/' class="link link-hover">Marketing</Link>
                    <Link to='/' class="link link-hover">Advertisement</Link>
                </div>
                <div className='text-white'>
                    <span class="footer-title">Company</span>
                    <Link to='/' class="link link-hover">About us</Link>
                    <Link to='/' class="link link-hover">Contact</Link>
                    <Link to='/' class="link link-hover">Jobs</Link>
                    <Link to='/' class="link link-hover">Press kit</Link>
                </div>
                <div className='text-white'>
                    <span class="footer-title">Legal</span>
                    <Link to='/' class="link link-hover">Terms of use</Link>
                    <Link to='/' class="link link-hover">Privacy policy</Link>
                    <Link to='/' class="link link-hover">Privacy policy</Link>
                    <Link to='/' class="link link-hover">Cookie policy</Link>
                </div>

            </div>
            <div className='pb-4 bg-blue-900 text-white text-center'>
                <p><small>Copyright © 2022 - All right reserved by Gadgets</small></p>
            </div>
        </footer>
    );
};

export default Footer;