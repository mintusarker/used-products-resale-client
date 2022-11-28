import React from 'react';
import toast from 'react-hot-toast';

const Products = ({ product, handleDeleteProduct }) => {

    const { image, price, name, detail, location, condition, phone, time } = product


    // const handleDeleteProduct = id => {
    //     fetch(`http://localhost:5000/products/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //           console.log(data)
    //             if (data.deletedCount > 0) {
    //                 refetch();
    //                 toast.success('Product deleted successfully');
    //             }
    //         })
    // };


    const handleAdvertise = () => {

        const advertise = {
            image,
            name,
            price,
            detail,
            time,
            condition,
            location,
            phone,
        };

        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Advertisement product added successfully');
            })
        console.log(advertise)
    }
    return (
        <div>
            <div className="card card-compact border p-5 bg-base-100 shadow-xl">
                <figure><img className='h-40 w-60' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Description: {detail}</p>
                    <p>Used: {time}</p>
                    <p>Condition: {condition}</p>
                    <p>Location: {location}</p>
                    <p>Contact: {phone}</p>
                    <div className="card-actions inline-grid">
                        <button onClick={() => handleDeleteProduct(product?._id)} className="btn btn-sm btn-primary">Delete</button>
                        <button className="btn btn-sm btn-primary">Available</button>
                        <button onClick={handleAdvertise} className="btn btn-sm btn-primary">Advertise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;