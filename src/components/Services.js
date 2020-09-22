import React from 'react';
import Servicealone from '../components/Servicealone';

const Services = () => {
    return (
        <>
         <section className="my-services" id="services">
         <h2 className="section__title section__title--services">What I do</h2>
         <div className="services">
           
             <Servicealone speciality ={"Reactjs"}/>
             <Servicealone speciality ={"Django"}/>
             <Servicealone speciality ={"Designing"}/>
         </div> 
         
         {/* <!-- services div closed --> */}

         <a href="#work" className="btn">My work</a>
     </section>
            
        </>
    );
}

export default Services;
