import React from 'react';
import { Grid } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='pt-20'>
            <div className='d-flex justify-content-center mt-5'>
         <Grid
                height="400"
                width="250"
                color='pink'
                ariaLabel='loading'
            />
         </div>
        </div>
    );
};

export default Loading;