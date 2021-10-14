import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import Record from '../record/Record';
import Feautures from '../features/Features';
import Technology from '../technology/Technology';
import Screenshoots from '../screenshoots/Screenshoots';
import News from '../news/News'
import Grab from '../grab/Grab';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Record></Record>
            <Feautures></Feautures>
            <Technology></Technology>
            <Screenshoots></Screenshoots>
            <News></News>
            <Grab></Grab>
            <Footer></Footer>
        </div>
    );
};

export default Home;