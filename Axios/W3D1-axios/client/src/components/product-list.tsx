import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../types/product';
import AddProduct from './add-product';

type Props = {
    products: Product[];
    deleteProduct: (product_id: number) => void;
}



export default function ProductList(props: Props) {
    const { products, deleteProduct } = props;

    return (
        <div>
            <h2>Product List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(prod => (
                        <tr key={prod.id}>
                            <th scope="row">{prod.id}</th>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>{prod.description}</td>
                            <td><button type='button' className="btn btn-primary" onClick={() => { deleteProduct(prod.id!) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
