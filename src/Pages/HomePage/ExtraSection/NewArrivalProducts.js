import React from 'react';

const NewArrivalProducts = ({ item }) => {
    const { name, version, image, price } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-60 w-72' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand: {name}</h2>
                    <p>Version : {version}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Coming Soon</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalProducts;