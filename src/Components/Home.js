import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../images/img1.svg'
import Common from './Common';

function Home() {
    return (
        <>
        <Common name="Grow your business with" imgsrc={web} visit='/service' btnname="Get Started" />
        </>
    )
}

export default Home
