import React from 'react';


const Portfolioproject = ({img}) => {
    return (
        <>
            <a href="./portfolio-item.html" className="portfolio__item">
                 <img src={img} alt="" className="portfolio__img"/>
             </a>
        </>
    );
}

export default Portfolioproject;
