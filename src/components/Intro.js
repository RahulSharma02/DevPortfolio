import React from 'react';
import Introimg from '../images/dev-jane-02.jpg';

const Intro = () => {
    return (
        <>
         <section className="about-me" id="about">
         <h2 className="section__title section__title--about">Who I am</h2>
         <p className="section__subtitle section__subtitle--about">Web developer based out of Chandigarh</p>

         <div className="about-me__body">
             <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi assumenda dolorum eligendi.
                    Quo possimus sed cum repellat impedit illo veniam molestiae
                    explicabo quisquam dignissimos quia doloribus quibusdam, voluptatibus iste cupiditate?
                </p>
             <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi assumenda dolorum eligendi.
                    Quo possimus sed cum repellat impedit illo veniam molestiae
                    explicabo quisquam dignissimos quia doloribus quibusdam, voluptatibus iste cupiditate?
                </p>
         </div>
         <img src={Introimg} alt="" className="about-me__img"/>
     </section>
            
        </>
    );
}

export default Intro;
