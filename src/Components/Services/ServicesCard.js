import React from 'react';
import { ServiceCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const ServicesCard = ({ icon, heading, desc }) => {
    return (
        <ServiceCard>
            <ServicesIcon src={icon} />
            <ServicesH2>{heading}</ServicesH2>
            <ServicesP>{desc}</ServicesP>
        </ServiceCard> 
    )
}

export default ServicesCard
