import React from 'react';
import '../assets/background.png'
import Image from 'react-bootstrap/Image'
import background from '../assets/background.png'


function Home() {
  return (
    <div className='background'>
      <Image src = {background} alt = "..." responsive />
    </div>
  );
}

export default Home;