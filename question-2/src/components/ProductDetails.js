import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ category, productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await axios.get(`/categories/${category}/products/${productId}`);
            setProduct(response.data);
        };
        fetchProductDetails();
    }, [category, productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} stars</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default ProductDetails;
