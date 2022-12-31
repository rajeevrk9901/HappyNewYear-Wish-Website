import React, { useRef, useEffect, useState } from 'react';
import song from '../audio/AnewaleSaalKoSalaam.mp3';

function Music() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     audioRef.current.play();
    //     setIsPlaying(true);
    // }, []);

    function togglePlay() {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }



    const MusicWave = () => {
        return (
            <div class="boxContainer mx-8">
                <div class="box box1"></div>
                <div class="box box2"></div>
                <div class="box box3"></div>
                <div class="box box4"></div>
                <div class="box box5"></div>
            </div>
        )
    }



    return (
        <div className='absolute top-6 right-12 flex'>
            {/* <audio src="/src/audio/AnewaleSaalKoSalaam.mp3"></audio> */}
            <audio ref={audioRef} src={song} />
            <span className='font-serif font-extralight pr-4 flex mx-4'>
                {isPlaying ? <MusicWave /> : ''} Happy New Year
            </span>

            <button button className='font-serif font-bold bg-red-300 px-2 rounded-md' onClick={togglePlay} > {isPlaying ? 'Pause' : 'Play'}</button >
        </div >
    );
}

export default Music;



