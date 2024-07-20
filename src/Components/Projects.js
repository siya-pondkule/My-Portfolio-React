import React from 'react';
import projects from './data/projects.json';

export const Projects = () => {
  return (
    <>
      <div className='container projects my-3' id='Projects'>
        <h1>PROJECTS</h1>
        <div className='row align-items-center justify-content-center d-flex'>
          {
            projects.map((data) => (
              <div key={data.id} className="my-4  col-sm-6 col-md-4 col-lg-4 mx-4">
                <div className="card bg-dark text-light" 
                style={{
                width: "18rem", 
                border: "1px solid yellow", 
                boxShadow:"7px 5px 10px 5px rgb(185, 229, 244)",
                }}
                data-aos="flip-right" 
                data-aos-duration="1000">
                <div className='img align-items-center justify-content-center d-flex p-3' >
                  <img src={data.imageSrc} className="card-img-top" alt='' 
                  style={{
                    width: "250px",
                    height: "200px", 
                    border: '2px solid yellow',
                    borderRadius: '10px'
                  }} />
                  </div>
                  <div className="card-body text-center" >
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.decription}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                    <a href={data.source} className="btn btn-warning">Code</a>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
