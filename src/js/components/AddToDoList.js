import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
 const addtask = (payload) => ({type: "ADD_TODO", payload});
 const mapDispatchToProps = (dispatch) => {
     return bindActionCreators({addtask}, dispatch)
 }


@connect(null, mapDispatchToProps)


export default class AddToDoList extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        let inpValue = {
            title: this.refs.inpTitle.value, 
            description: this.refs.description.value
        }
        this.props.addtask(inpValue)

    }
    render(){
        return(
            <form className='mm'>
                <div className='add-todo'>
                    <input type='text' ref='inpTitle' />
                    <textarea ref='description'></textarea>
                    <button onClick={this.handleClick}>Submit</button>
                </div>
            </form>
        )
    }
}