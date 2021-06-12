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
                    <p className="hero__p">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                    <div className="btnWrapper">
                        <Button to="signup" onMouseEnter={btnHover} onMouseLeave={btnHover}>
                            Get Started {hover? <ArrowForward />: <ArrowRight />}
                        </Button>
                    </div>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSection;
