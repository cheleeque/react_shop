import React, {useEffect} from 'react';

const Alert = (props) => {
    const {
        name = '',
        closeAlert = Function.prototype,
    } = props

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        }
    }, [name])

    return (
        <div id="alert-container">
            <div className={"alert"}>
                <p>{name} added to cart</p>
            </div>
        </div>
    );
};

export default Alert;