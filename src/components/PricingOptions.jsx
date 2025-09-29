import React, {use} from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);

    return (
        <div className=''>
            <h1 className='text-7xl '> Get Your Membership Now!</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;   

