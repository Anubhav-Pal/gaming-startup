import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-slate-900 sm:bg-transparent mt-20 flex items-center justify-around gap-4'>
            <div className='text-white flex flex-col sm:flex-row gap-2 sm:gap-5 items-center text-sm font-semibold'>
                made with ❤️ by Anubhav Pal
                <div>
                    <Link to='https://www.linkedin.com/in/anubhavpal/' target="_blank"><FaLinkedin size={30} style={{ color: 'white' }} /></Link>
                </div>
                <div className='text-white'>
                    anubhavpal.excl@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer