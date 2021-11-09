import React , {Component} from 'react';

const Nav = () => {
    return (
        <div className="Nav">
            <div className="container">
               {/* <link to="#" className="logo">Logo</link> */}
               <ul>
                 <a  href="/home">Home</a> 
                 <a href="/about">About</a>
                 <a href="/blog">Blog</a>
               </ul>
            </div>
      </div>
    );
}
export default Nav;