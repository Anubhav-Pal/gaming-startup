import React from 'react'
import mercury from '../assets/Mercury.svg'
import earth from '../assets/Venus-1.svg'
import venus from '../assets/Venus.svg'
import { Link } from 'react-router-dom'
import clickSound from '../assets/sound1.mp3'
import { FaLinkedin } from 'react-icons/fa'

const Home = () => {

    const soundEffect = new Audio(clickSound);
    return (
        <div>
            <div id='main' className="h-screen overflow-hidden flex flex-col justify-between">
                <div className='header flex text-white text-2xl font-bold items-center justify-around mt-10'>
                    <div>
                        Learn English Alphabets
                    </div>
                </div>
                <div className='main-component flex items-center justify-around'>
                    <div className='option flex flex-wrap items-center justify-around gap-10'>
                        <Link to='/play1' onClick={() => {
                            soundEffect.play().catch(error => console.error('Error playing sound:', error));
                        }} className='w-32 flex flex-col items-center'>
                            <img src={earth} className='opacity-85 hover:opacity-100' alt="" />
                            <h1 className='text-white text-2xl font-bold'>A - H</h1>
                        </Link>
                        <Link to='/play2' onClick={() => {
                            soundEffect.play().catch(error => console.error('Error playing sound:', error));
                        }} className='w-36 flex flex-col items-center'>
                            <img src={mercury} className='opacity-85 hover:opacity-100' alt="" />
                            <h1 className='text-white text-2xl font-bold'>I - P</h1>
                        </Link>
                        <Link to='/play3' onClick={() => {
                            soundEffect.play().catch(error => console.error('Error playing sound:', error));
                        }} className='w-32 flex flex-col items-center'>
                            <img src={venus} className='opacity-85 hover:opacity-100' alt="" />
                            <h1 className='text-white text-2xl font-bold'>Q - Z</h1>
                        </Link>
                    </div>

                </div>
                <div>
                    <div className='footer m-4 flex items-center justify-around gap-4'>
                        <div className='text-white flex flex-col sm:flex-row gap-2 sm:gap-5 items-center text-sm font-semibold'>
                            made with ❤️ by Anubhav Pal
                            <div className='text-white flex items-center gap-2'>
                                <div>
                                    <Link to='https://www.linkedin.com/in/anubhavpal/' target="_blank"><FaLinkedin size={30} style={{ color: 'white' }} /></Link>
                                </div>
                                <div>
                                    anubhavpal.excl@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home