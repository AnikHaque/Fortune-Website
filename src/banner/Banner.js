import React from 'react';
import './Banner.css'
import {Button} from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="banner">
            <div class="container">
  <div class="row">
    <div class="col-12 col-lg-12 col-sm-12 col-md-12">
    <h1 className="text-white fw-bold banner-title">Fortun, your next App.</h1>
            <h4 className="text-white mt-4">Made your life easy with fortune.</h4>
            <Button variant="dark" className="p-2 px-4 pe-4 mt-4 mb-4  rounded">Play Video</Button>
            <br></br>
            
            <img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/09/mockup_6.png" className="img-fluid w-50"></img>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Banner;