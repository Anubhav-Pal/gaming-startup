import React from 'react'
import mercury from '../assets/Mercury.svg'
import earth from '../assets/Venus-1.svg'
import venus from '../assets/Venus.svg'
import { Link } from 'react-router-dom'
import clickSound from '../assets/sound1.mp3'
import Footer from './Footer'

const Home = () => {

    const soundEffect = new Audio(clickSound);
    return (
        <div>
            <div id='main' className="main sm:h-screen sm:overflow-hidden flex-col items-center justify-between">
                <div className='pt-10 header flex text-white text-2xl font-bold items-center justify-around '>
                    <div>
                        {/* Abhishek Bishnoi */}
                        Learn English Alphabets
                    </div>
                </div>
                <div className='mt-10  sm:mt-40 main-component flex items-center justify-around'>
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

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home