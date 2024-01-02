import React from 'react'
import island from '../assets/island.png'
import Alphabet from './Alphabet'
import Lottie from 'lottie-react';

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

import icecream from '../assets/gif/icecream.json'
import joker from '../assets/gif/joker.json'
import kite from '../assets/gif/kite.json'
import lion from '../assets/gif/lion.json'
import mango from '../assets/gif/mango.json'
import night from '../assets/gif/night.json'
import owl from '../assets/gif/owl.json'
import parrot from '../assets/gif/parrot.json'


const GameComponent3 = () => {


    const alphabet = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    const [userAlphabet, setUserAlphabet] = useState('I');

    let imgSrc;
    switch (userAlphabet) {
        case 'I':
            imgSrc = icecream;
            break;
        case 'J':
            imgSrc = joker;
            break;
        case 'K':
            imgSrc = kite;
            break;
        case 'L':
            imgSrc = lion;
            break;
        case 'M':
            imgSrc = mango;
            break;
        case 'N':
            imgSrc = night;
            break;
        case 'O':
            imgSrc = owl;
            break;
        case 'P':
            imgSrc = parrot;
            break;
        default:
            // You might want to set a default image or handle this case accordingly
            break;
    }

    const renderContent = () => {
        switch (userAlphabet) {
            case 'I':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ce Cream
                    </h1>
                );
            case 'J':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>oker
                    </h1>
                );
            case 'K':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ite
                    </h1>
                );
            case 'L':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ion
                    </h1>
                );
            case 'M':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ango
                    </h1>
                );
            case 'N':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ight
                    </h1>
                );
            case 'O':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>wl
                    </h1>
                );
            case 'P':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>arrot
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
        <div >
            <div id='main' className="h-screen flex flex-col justify-between">
                <div className='mt-10'>

                    <div className='w-full gif-container flex flex-col items-center justify-around'>
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
                    <div className='text-white text-2xl font-bold text-center'>{renderContent()}</div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-3/3 xs:w-2/3'>
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
                </div>
                <div id="island" className='opacity-65'>
                    <img src={island} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GameComponent3

