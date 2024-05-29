import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [n, setN] = useState(10);
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`/categories/${category}/products`, {
                params: { n, page, sort, order }
            });
            setProducts(response.data);
        };
        fetchProducts();
    }, [category, n, page, sort, order]);

    return (
        <div>
            <h1>Products in {category}</h1>
            <div>
                <label>
                    Sort by:
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="">None</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="company">Company</option>
                    </select>
                </label>
                <label>
                    Order:
                    <select value={order} onChange={e => setOrder(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - {product.rating} stars - {product.company}
                    </li>
                ))}
            </ul>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

export default ProductList;
