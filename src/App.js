import './App.scss';

import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Hny from './component/Hny';
import Footer from './component/Footer';
import Music from './component/Music';


function App() {

  function ProfilePage() {
    // Get the userId param from the URL.
    let { userId } = useParams();

    return (
      <>
        <div className="drop-shadow-2xl">
          <span className='drop-shadow-4xl font-semibold font-sans text-rose-900 shadow-none text-4xl mr-6'>Hi,   </span>  <span className='text tracking-wide'>{userId}</span>
        </div>
        <Hny />
      </>
    );
  }


  return (
    <>
      <div className="App flex justify-center items-center min-h-screen">
        <div className='flex flex-col justify-center items-center'>
          {/* <div className='z-98'> Hi, <audio src="../audio/AnewaleSaalKoSalaam.mp3"></audio></div> */}
          <Music />
          <Routes>
            <Route exact path="/" element={<Hny />} />
            <Route path=":userId" element={<ProfilePage />} />
            {/* <div class="text">amit</div> */}
          </Routes>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
