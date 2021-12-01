import React from 'react'
import DevBox from '../components/DevBox';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';


const Home = () => {

    
    return (
        <>
            <div id='main'>
                <div className='header-heading'>
                    <h3>Want a place to start your career?</h3><br />
                    <h1><span>LOOK</span> RIGHT <br /> HERE</h1><br /><br />
                        <a href='/jobs' className='header-btn'>Find Jobs</a>
                </div>
            </div>
            <div id='developers'>
                <h1>CHOOSE YOUR DEV.</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, consectetur</p>
                <div className='a-container'>
                    <DevBox image={pimage1} title="Full-Stack Developer" category="full-stack" />
                    <DevBox image={pimage2} title="Front-End Developer" category="front-end" />
                    <DevBox image={pimage3} title="Back-End Developer" category="back-end"/>  
                </div>
            </div>            
        </>
    )
}

export default Home;
