import './App.scss';

import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Hny from './component/Hny';
import Footer from './component/Footer';
import Music from './component/Music';
import Snowfall from 'react-snowfall'
// import Heart from "react-animated-heart";


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
  // const [isClick, setClick] = useState(false);

  return (
    <>
      <div className="App flex justify-center items-center min-h-screen">
        {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
        <div className='flex flex-col justify-center items-center'>

          <Music />
          <Routes>
            <Route exact path="/" element={<Hny />} />
            <Route path=":userId" element={<ProfilePage />} />
            {/* <div class="text">amit</div> */}
          </Routes>

        </div>

      </div>
      <Snowfall color="#ffffff"
        // Applied to the canvas element.
        style={{ zIndex: 98 }}
        // Controls the number of snowflakes that are created (defaults to 150).
        snowflakeCount={180} />
      <Footer />
    </>

  );
}

export default App;
