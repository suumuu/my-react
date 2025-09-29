import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {id, plan, price, description, features} = pricing;
    console.log(pricing);
return (
    <>
        {/* card header */}
        <div className='border bg-amber-500 p-8 m-4 rounded-lg flex flex-col'>
            <h1 className='text-5xl'>{plan}</h1>
            <p className='text-2xl'>{price}</p>

             {/* card body */}
             <div className='text-xl bg-amber-200 rounded-lg p-4 m-4 flex-1'>
                <p>{description}    </p>           
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }    
             </div>
            
            <button className="btn w-full">Subscribe</button>
        </div>
       
        
    </>
);
};

export default PricingCard;