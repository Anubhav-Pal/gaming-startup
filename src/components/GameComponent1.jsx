import React from 'react'
import island from '../assets/island.png'
import Alphabet from './Alphabet'
import A from '../assets/gif/ambulance.gif'
import B from '../assets/gif/bear.gif'
import C from '../assets/gif/coin.gif'
import D from '../assets/gif/duck.gif'
import E from '../assets/gif/eye.gif'
import F from '../assets/gif/food-truck.gif'
import G from '../assets/gif/gift.gif'
import H from '../assets/gif/horse.gif'
import { useState } from 'react'
import clickSound from '../assets/sound1.mp3'
import a from '../assets/A.mp3'
import b from '../assets/B.mp3'
import c from '../assets/C.mp3'
import d from '../assets/D.mp3'
import e from '../assets/E.mp3'
import f from '../assets/F.mp3'
import g from '../assets/G.mp3'
import h from '../assets/H.mp3'


const GameComponent = () => {


    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const [userAlphabet, setUserAlphabet] = useState('A');
    let imgSrc;
    if (userAlphabet === 'A') {
        imgSrc = A;
    } else if (userAlphabet === 'B') {
        imgSrc = B;
    } else if (userAlphabet === 'C') {
        imgSrc = C;
    } else if (userAlphabet === 'D') {
        imgSrc = D;
    } else if (userAlphabet === 'E') {
        imgSrc = E;
    } else if (userAlphabet === 'F') {
        imgSrc = F;
    } else if (userAlphabet === 'G') {
        imgSrc = G;
    } else if (userAlphabet === 'H') {
        imgSrc = H;
    }

    const renderContent = () => {
        switch (userAlphabet) {
            case 'A':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>mbulance
                    </h1>
                );
            case 'B':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ear
                    </h1>
                );
            case 'C':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>oin
                    </h1>
                );
            case 'D':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>uck
                    </h1>
                );
            case 'E':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ye
                    </h1>
                );
            case 'F':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ood Truck
                    </h1>
                );
            case 'G':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ift
                    </h1>
                );
            case 'H':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>orse
                    </h1>
                );
        }
    };


    const audioMap = {
        A: new Audio(a),
        B: new Audio(b),
        C: new Audio(c),
        D: new Audio(d),
        E: new Audio(e),
        F: new Audio(f),
        G: new Audio(g),
        H: new Audio(h),
    };


    return (
        <div className='main2'>
            <div className='flex flex-col items-center justify-between'>
                <div className='w-auto gif-container flex items-center justify-around mt-10'>
                    <div className='w-1/3'>
                        <img src={imgSrc} alt="" />
                    </div>
                </div>
                <div className='mb-10 text-white text-2xl font-bold'>{renderContent()}</div>
                <div className='flex flex-col items-center justify-between'>
                    <div className='w-2/3 mb-10'>
                        <div className='flex flex-wrap items-center gap-4 justify-evenly'>
                            {alphabet.map((letter, index) => (
                                <div className='cursor-pointer' key={index}>
                                    <button onClick={() => { setUserAlphabet(letter); audioMap[letter].play().catch(error => console.error('Error playing sound:', error)); }} >
                                        <Alphabet letter={letter} />
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div id="island" className='h-full bg-contain opacity-65'>
                        <img src={island} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameComponent


