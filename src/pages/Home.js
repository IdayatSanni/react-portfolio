import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <div>
      <div className='container mt-4'>
        <div className='row row-cols-lg-2 row-cols-md-1 subscribe-measure align-items-center justify-content-center'>
          <div>
            <h1 class='mb-4'>Hi I am Idayat Sanni</h1>
            <h2 class='mb-4'>Frontend Developer, based in Canada.</h2>
            <p class='mb-4 text-muted'>
              I am a frontend developer who aims to combine my background in
              creating eye-pleasing visuals with technology to create impactful
              projects
            </p>
            <Button className='text-white'>
              <Link to='/projects'>View all my projects</Link>
            </Button>
          </div>
          <div className='mt-2'>
            <img
              src='../images/IMG_9792.jpg'
              className='img-fluid about-image'
              alt='logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
