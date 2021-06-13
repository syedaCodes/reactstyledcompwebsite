import React from 'react';
import ServicesCard from './ServicesCard';
import { ServicesContainer, ServicesH1, ServicesWrapper } from './ServicesElements';
import { serviceOne, serviceTwo, serviceThree } from './ServicesData';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard {...serviceOne}/>
                    <ServicesCard {...serviceTwo}/>
                    <ServicesCard {...serviceThree}/>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
