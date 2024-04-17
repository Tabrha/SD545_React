// import React,{useState} from 'react'

// export default function AddProduct() {
//     const [title, setTitle] = useState('')
//     const [price, setPrice] = useState('')
//     const [description, setDescription] = useState('')


//     const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
       
//         setTitle(e.target.value);
//     }

    
//     const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
       
//         setPrice(e.target.value);
//     }

//     const changeDescription = (e: ChangeEvent<HTMLInputElement>) => {
       
//         setDescription(e.target.value);
//     }


//     const submitForm = (e: FormEvent<HTMLFormElement>) => {
//        e.preventDefault();
//        axios;
//     }

//     return (
//         <div><h2>Add a new Product</h2>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="title" className="form-label">Title</label>
//                     <input className="form-control" id="title"  value={title}  onChange={changeTitle} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="price" className="form-label">Price</label>
//                     <input type="number" className="form-control" id="price" value={price}/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <textarea className="form-control" id="description" rows={3}   value={description}  onChange={changeDescription}></textarea>
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form></div>
//     )
// }
