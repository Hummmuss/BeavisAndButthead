import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/ThreeDots';

function LoadingSpinner() {
    return (
        <div className="loading-spinner">
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
    );
}

export default LoadingSpinner;