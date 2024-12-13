import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className='container mt-4'>
        <div className='row row-cols-lg-3 row-cols-md-2 subscribe-measure align-items-center justify-content-center'>
          <div className='mt-2 text-center'>
            <img
              src='../images/2.png'
              class='img-fluid rounded mb-3'
              alt='Portfolio'
            />
            <h4>Ecommerce Project</h4>

            <a
              href='https://boostrap-project-bgit.netlify.app/'
              className='btn btn-primary mb-3'>
              View Store
            </a>
          </div>

          <div className='mt-2 text-center'>
            <img
              src='../images/3.png'
              class='img-fluid rounded mb-3'
              alt='Portfolio'
            />
            <h4>Weather Project</h4>

            <a
              href='https://weatherappida.netlify.app/'
              className='btn btn-primary mb-3'>
              View Website
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
