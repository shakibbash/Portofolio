import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-12 items-center '>
                <div>
<HeroContent></HeroContent>
                </div>
                <div>
<HeroImage></HeroImage>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;