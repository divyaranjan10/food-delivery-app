import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const errData = useRouteError();
    return (
        <div className='text-center'>
            <h1 className='text-xl font-bold'>Oops! Something went wrong.</h1>
            <h2>{errData.status} : {errData.statusText}</h2>
        </div>
    )
}

export default Error;