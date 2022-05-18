import React from 'react';

const FortniteButton = (props) => {
    return (
        <div className="button-wrapper">
            <div className="button-inner">
                <p {...props}></p>
            </div>
        </div>
    );
};

export default FortniteButton;