import React, { useState } from 'react';
import { 
    HeroContainer, 
    HeroContent, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';
import { Button } from '../Button';

const HeroSection = () => {

    const [ hover, setHover ] = useState(false);

    const btnHover = () =>{
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer id="home">
                <HeroContent>
                    <h1 className="hero__title">An Artificial Intelligence Program</h1>
                    <p className="hero__p">"AI software solutions to create a sustainable and cohesive AI-driven ecosystem for startups, small-midsize businesses, and enterprise-wide businesses."</p>
                    <div className="btnWrapper">
                        <Button to="signup"
                        onMouseEnter={btnHover}
                        onMouseLeave={btnHover}
                        smooth={true}
                        duration={true}
                        spy={true} 
                        exact='true'>
                            Get Started {hover? <ArrowForward />: <ArrowRight />}
                        </Button>
                    </div>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSection;
