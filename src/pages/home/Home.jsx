import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>Hi there, I'm Robert .</span> Passionate Designer & Web
            Developer
          </h1>

          <p className='home__description'>
            Design lays the groundwork for culture, which in turn shapes our
            values. Those values decide what the future will look like. Everyone
            has their own story, and my story begins right here. <br />
            As a web designer and front-end developer, I aim to create neat and
            easy-to-use experiences. I love building great projects that can
            make people's lives better.
          </p>

          <Link to='/about' className='button'>
            More About Me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  );
};

export default Home;
