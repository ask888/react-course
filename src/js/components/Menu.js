import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    render(){
        return(
            <div className="menu-container">
                <Link to="/" children="Main" className="links" />
                <Link to="/add" children="Add Post" className="links" />
                <Link to="/about" children="About" className="links" />
                {/* <input type='text' ref='inpSearch' className='search' placeholder='Search' /> */}
            </div>
        )
    }
}