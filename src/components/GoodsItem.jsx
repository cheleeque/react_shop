import React from 'react';
import FortniteButton from "./FortniteButton";

const GoodsItem = (props) => {
    const {
        id,
        name,
        price,
        image,
        type,
        addToCart = Function.prototype,
    } = props;

    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={image}></img>
            </div>
            <div className="card-content">
                <span className="card-title activator white-text">{name}</span>
                <hr></hr>
                <div className="card-description">
                    <FortniteButton onClick={() => addToCart({
                        id,
                        name,
                        price,
                            })
                        }
                    >{price}$</FortniteButton>
                    <span className="goodDescription">{type}</span>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;