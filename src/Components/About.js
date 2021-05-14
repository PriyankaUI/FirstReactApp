import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../images/img1.svg'
import Common from './Common';

function About() {
    return (
        <>
       <Common name="Welcome to About page" imgsrc={web} visit='/contact' btnname="Contact Now" />
        </>
    )
}

export default About
