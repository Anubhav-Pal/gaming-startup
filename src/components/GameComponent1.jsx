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



import apple from '../assets/gif/apple.json'
import bear from '../assets/gif/bear.json'
import cat from '../assets/gif/cat.json'
import duck from '../assets/gif/duck.json'
import elephant from '../assets/gif/elephant.json'
import fish from '../assets/gif/fish.json'
import giraffe from '../assets/gif/giraffe.json'
import heart from '../assets/gif/heart.json'


const GameComponent = () => {


    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const [userAlphabet, setUserAlphabet] = useState('A');
    let imgSrc;
    if (userAlphabet === 'A') {
        imgSrc = apple;
    } else if (userAlphabet === 'B') {
        imgSrc = bear;
    } else if (userAlphabet === 'C') {
        imgSrc = cat;
    } else if (userAlphabet === 'D') {
        imgSrc = duck;
    } else if (userAlphabet === 'E') {
        imgSrc = elephant;
    } else if (userAlphabet === 'F') {
        imgSrc = fish;
    } else if (userAlphabet === 'G') {
        imgSrc = giraffe;
    } else if (userAlphabet === 'H') {
        imgSrc = heart;
    }

    const renderContent = () => {
        switch (userAlphabet) {
            case 'A':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>pple
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
                        <span className='text-4xl'>{userAlphabet}</span>at
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
                        <span className='text-4xl'>{userAlphabet}</span>lephant
                    </h1>
                );
            case 'F':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>ish
                    </h1>
                );
            case 'G':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>iraffe
                    </h1>
                );
            case 'H':
                return (
                    <h1>
                        <span className='text-4xl'>{userAlphabet}</span>eart
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
                    <div className='xs:w-2/3'>
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

export default GameComponent


