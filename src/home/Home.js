import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import Record from '../record/Record';
import Feautures from '../features/Features';
import Technology from '../technology/Technology';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Record></Record>
            <Feautures></Feautures>
            <Technology></Technology>
        </div>
    );
};

export default Home;