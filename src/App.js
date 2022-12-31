import './App.scss';

import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Hny from './Hny';


function App() {

  function ProfilePage() {
    // Get the userId param from the URL.
    let { userId } = useParams();

    return (
      <>
        <div className="text uppercase drop-shadow-2xl">
          {userId}
        </div>
        <Hny />
      </>
    );
  }


  return (
    <div className="App flex justify-center items-center min-h-screen">
      <div className='flex flex-col justify-center items-center'>

        <Routes>
          <Route exact path="/" element={<Hny />} />
          <Route path=":userId" element={<ProfilePage />} />
          {/* <div class="text">amit</div> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
