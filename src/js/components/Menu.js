import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router'

@withRouter
export default class Menu extends React.Component{
onSearch = (event) => {
    console.log(event.keyCode) // = 13
    if(event.keyCode == 13 && this.refs.inpSearch.value != ''){
        this.props.history.push('/search/' + this.refs.inpSearch.value)
    }
}

    render(){
        return(
            <div className="menu-container">
                {/* <div> */}
                <Link to="/" children="Main" className="links" />
                <Link to="/add" children="Add Post" className="links" />
                <Link to="/about" children="About" className="links" />
                {/* </div> */}
                <input type='text' ref='inpSearch' className='search' placeholder='Search' onKeyDown={this.onSearch} />
           </div> 
        )
    }
}