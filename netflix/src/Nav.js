import React, {useState, useEffect} from 'react'
import './Nav.css'
function Nav(){
    const [show, handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener('scroll');
        }
    },[]);
    return(
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_logo'
            src='https://midiaresearch.com/storage/uploads/blog/featured/1177/cover_image-1594998634.png'
            alt='Netflix_logo'/>

        </div>
    )
}

export default Nav