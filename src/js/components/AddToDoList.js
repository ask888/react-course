import React from 'react'

export default class AddToDoList extends React.Component{
    constructor(props){
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick(){
        if(this.refs.inpTitle.value != "" && this.refs.textArea.value != ""){
            this.props.funAdd(this.refs.inpTitle.value, this.refs.textArea.value);
            this.refs.inpTitle.value = ""
            this.refs.textArea.value = ""
        }
        else(
            console.log("Fill all forms")
        )
    }


render(){
    return(
        <div className= 'wrapper'>
            <div className='add-todo'>
                <input type='text' placeholder='Title' ref='inpTitle' />
                <textarea ref='textArea' placeholder='Write your To Do here'></textarea>
                <button onClick = {this.handleOnClick}>Add To Do</button>
            </div>
        </div>
    )
}
}