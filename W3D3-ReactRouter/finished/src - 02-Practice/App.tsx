import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from '../src - 02-Practice/components/Home';
import Blog from '../src - 02-Practice/components/Blog';
import About from '../src - 02-Practice/components/Aabout';
import NotFound from '../src - 02-Practice/components/NotFound';

type use{children:string, 
to:string, 
activeClassName:string
}
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink  to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route element={<NotFound/>} />
      </div>
    </BrowserRouter>

  );
}

{/* <div className="col-9">
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/" element={<Navigate to="/about" />}></Route>

          </Routes> */}