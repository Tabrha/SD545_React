// import axios from 'axios'
// import React,{ChangeEvent, FormEvent, useState} from 'react'

// export default function AddProduct() {
//     const [title, setTitle] = useState('')
//     const [price, setPrice] = useState(0)
//     const [description, setDescription] = useState('')


//     const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
       
//         setTitle(e.target.value);
//     }

    
//     const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
       
//         setPrice(Number(e.target.value));
//     }

//     const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
       
//         setDescription(e.target.value);
//     }


//     const submitForm = async(e: FormEvent<HTMLFormElement>) => {
//        e.preventDefault();
//        const response = await axios.get(http://localhost:8000/products)
//        set
//     }

//     return (
//         <div><h2>Add a new Product</h2>
//             <form  onSubmit={submitForm} >
//                 <div className="mb-3">
//                     <label htmlFor="title" className="form-label">Title</label>
//                     <input className="form-control" id="title"  value={title}  onChange={changeTitle} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="price" className="form-label">Price</label>
//                     <input type="number" className="form-control" id="price" value={price} onChange={changePrice}  />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <textarea className="form-control" id="description" rows={3}   value={description}  onChange={changeDescription}></textarea>
//                 </div>

//                 <button type="submit" className="btn btn-primary" >Submit</button>
//             </form></div>
//     )
// }



import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../types/product';
import productService from '../apis/services/product.service';

type Props = {
    onAddNewProd: (prod: Product) => void;
}

export default function AddProduct(props: Props) {
    const [product, setProduct] = useState<Product>({id:1, title: '', price: 0, description: ''});
    const {onAddNewProd} = props;
    const {title, price, description} = product;

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setProduct({...product, description: e.target.value});
    }

       const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const response = await productService.addNewProduct({id:1,title, price, description});
        const response = await axios.post(` http://localhost:8000/products`, {title, price, description})
        console.log(response);
        if(response.status === 201){
            onAddNewProd(response.data);
            setProduct({id:1, title: '', price: 0, description: ''});
        }
       
    }

    return (
        <div>
            <h2>Add a new Product</h2>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title" value={title} name="title" onChange={changeInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} name="price" onChange={changeInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows={3} 
                    onChange={changeDescription} value={description}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}