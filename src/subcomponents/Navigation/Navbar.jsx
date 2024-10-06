import React from 'react';
import './Nav.css';
import Routes from '../Routes/Routes';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Search from './../Search/Search';
import { useState } from 'react';

const Navbar = () => {

    let [data,setData] = useState(false);
    let search_btn = () =>{
        setData(true)
    }
    let cross =() =>{
        setData(false)
    }


    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src="public/images/logo.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">

        {
        Routes.map((route,index)=>{

            if(route.subMenu){
             return(
                
                <li key={index} className="nav-item-dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  href={route.path}>
                    {route.title}{""}
                  </a>
                  <ul className="dropdown-menu">
                    {
                        route.subMenu.map((subRoute,index) =>{
                         return(
                            <li key={index}>
                                <a className="dropdown-item" href={subRoute.path}>
                                    {subRoute.title}
                                </a>
                            </li>
                         )
                        })
                    }


          
            
          </ul>
                </li>
             )
            }
            else{
                return(
                    <li key={index} className="nav-item">
                        <a className="nav-link" href={route.path}>
                            {route.title}
                        </a>
                    </li>
                )
            }
          
           
        })
        }



        
       
      </ul>


      <ul className="m-0 d-flex icons">
        <li>
            <a href="#" onClick={search_btn}>
                <span>
                    <CiSearch />
                </span>
            </a>
        </li>

        <li>
            <a href="">
                <span>
                <CiUser />
                </span>
            </a>
        </li>
        <li>
            <a href="">
                <span>
                <CiHeart />
                </span>
            </a>
        </li>
        <li className="last">
            <a href="">
                <span>
                <IoBagOutline />
                <span className="number">0</span>
                </span>
            </a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

<section className="search_end d-lg-none">
    <div className="container">
        <div className="row">
            <div className="col-2 mx-auto text-center">
            <span className="search_child"><CiSearch /></span>
            </div>
        </div>
    </div>
</section>

     <Search popup={data} cross={cross}/>


      

        </div>
    );
};

export default Navbar;