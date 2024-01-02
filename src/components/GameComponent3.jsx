import React from 'react'
import island from '../assets/island.png'
import Alphabet from './Alphabet'
import Lottie from 'lottie-react';
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

import queen from '../assets/gif/queen.json'
import rich from '../assets/gif/rich.json'
import santa from '../assets/gif/santa.json'
import truck from '../assets/gif/truck.json'
import umbrella from '../assets/gif/umbrella.json'
import van from '../assets/gif/van.json'
import watch from '../assets/gif/watch.json'
import xmark from '../assets/gif/x.json'
import yatch from '../assets/gif/yatch.json'
import zebra from '../assets/gif/zebra.gif'


const GameComponent3 = () => {


    const alphabet = ['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [userAlphabet, setUserAlphabet] = useState('Q');
    let imgSrc;
    if (userAlphabet === 'Q') {
        imgSrc = queen;
    } else if (userAlphabet === 'R') {
        imgSrc = rich;
    } else if (userAlphabet === 'S') {
        imgSrc = santa;
    } else if (userAlphabet === 'T') {
        imgSrc = truck;
    } else if (userAlphabet === 'U') {
        imgSrc = santa;
    } else if (userAlphabet === 'V') {
        imgSrc = van;
    } else if (userAlphabet === 'W') {
        imgSrc = watch;
    } else if (userAlphabet === 'X') {
        imgSrc = xmark;
    } else if (userAlphabet === 'Y') {
        imgSrc = yatch;
    } else if (userAlphabet === 'Z') {
        imgSrc = yatch;
    }

    const renderContent = () => {
        switch (userAlphabet) {
            case 'Q':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ueen
                    </h1>
                );
            case 'R':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ich
                    </h1>
                );
            case 'S':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>anta
                    </h1>
                );
            case 'T':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ruck
                    </h1>
                );
            case 'U':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>mbrella
                    </h1>
                );
            case 'V':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>an
                    </h1>
                );
            case 'W':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>atch
                    </h1>
                );
            case 'X':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>mark
                    </h1>
                );
            case 'Y':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>atch
                    </h1>
                );
            case 'Z':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ebra
                    </h1>
                );
            default:
                return null;
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

            <div className=' flex flex-col items-center justify-between'>
                <div className='w-full gif-container flex items-center justify-around mt-10'>
                    <div className=''>
                        <div>
                            <Lottie
                                animationData={imgSrc} // Lottie animation JSON data
                                loop={true} // Set to true if you want the animation to loop
                                autoplay={true} // Set to true if you want the animation to play automatically
                                style={{ width: 200, height: 200 }}
                            />
                        </div>
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
                    <div id="island" className='h-full opacity-65'>
                        <img src={island} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameComponent3