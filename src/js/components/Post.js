import React, {Component} from 'react';

export default class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.delSomePost = this.delSomePost.bind(this)
    }
    delSomePost(){
        this.props.del(this.props.key1)
        console.log(this.props)
    }
   render(){
       const{isOpen} = this.state
    return (
        <article className="item">
            <h1>{this.props.data.title}</h1>
            {isOpen ? <p>{this.props.data.description}</p> : <p>{this.props.data.description.slice(0, 119)}</p>}
            <div className="buttons">
                <button onClick={this.toggleOpen }>Show more</button>
                <button onClick={this.delSomePost}>Delete</button>
            </div>
        </article>
    
    
);
   }

   toggleOpen = () => {
       this.setState({
           isOpen: !this.state.isOpen 
       })
   }
    }

