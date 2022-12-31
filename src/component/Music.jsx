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
            <div class="boxContainer mr-6">
                <div class="box box1"></div>
                <div class="box box2"></div>
                <div class="box box3"></div>
                <div class="box box4"></div>
                <div class="box box5"></div>
            </div>
        )
    }



    return (
        <div className='absolute top-2 right-0 px-4 pl-12 flex justify-between w-full'>
            {/* <audio src="/src/audio/AnewaleSaalKoSalaam.mp3"></audio> */}
            <audio ref={audioRef} src={song} />
            <span className='font-serif font-extralight flex m'>
                {isPlaying ? <MusicWave /> : ''} Happy New Year
            </span>

            <button button className='font-serif font-bold w-16 h-6 bg-red-300 px-2 rounded-md' onClick={togglePlay} > {isPlaying ? 'Pause' : 'Play'}</button >
        </div >
    );
}

export default Music;



