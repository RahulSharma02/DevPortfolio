import React from 'react';
import Portfolioproject from './Portfolioproject';
import Img1 from '../images/portfolio-01.jpg';
import Img2 from '../images/portfolio-02.jpg';
import Img3 from '../images/portfolio-03.jpg';
import Img4 from '../images/portfolio-04.jpg';
import Img5 from '../images/portfolio-05.jpg';


const Mywork = () => {
    return (
        <>
        <section className="my-work" id="work">
         <h2 className="section__title">My work</h2>
         <p className="section__subtitle--work">Some Projects That I have Built</p>

         <div className="portfolio">

         <Portfolioproject img = {Img1}/>
         <Portfolioproject img = {Img2}/>
         <Portfolioproject img = {Img3}/>
         <Portfolioproject img = {Img4}/>
         <Portfolioproject img = {Img5}/>

            
         </div>
     </section>
            
        </>
    );
}

export default Mywork;
