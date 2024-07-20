import React from 'react'
import experience from './data/experience.json'

export const Experience = () => {
  return (
    <>
      <div className='container ex' id='Experience'>
        <h1>EXPERIENCE</h1>
          {
            experience.map((data)=>{
              return(
                <>
                  <div key={data.id} className='ex-items text-center my-5'
                  data-aos="zoom-in" 
                  data-aos-duration="1000">
                    <div className='left'>
                    <div className='img'>
                      <img src={`/assets/${data.imageSrc}`} alt=''/>
                      </div>
                    </div>
                    <div className='right'>
                      <h2>{data.role}</h2>
                      <h4><span style={{color:'yellowgreen'}}>{data.startDate}{" "}{data.endDate}{" "}</span>{" "}
                      <span style={{color:'yellow'}}> {data.location} </span></h4>

                      <h5><span style={{color:'yellow'}}>{data.experiences[0]}</span></h5>
                      <h5><span style={{color:'yellow'}}>{data.experiences[1]}</span></h5>
                      

                    </div>
                  </div>
                </>
              );
            })
          }
      </div>
    </>
  )
}
