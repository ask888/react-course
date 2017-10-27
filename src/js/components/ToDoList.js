import React from 'react'
import {connect} from 'react-redux'
import ToDoItem from '../components/ToDoItem'


const mapStateToProps = (state, ownProps) => {
    return {newItem: state.todos.data}
}

@connect(mapStateToProps)

export default class ToDoList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.newItem)
        return(
            <div className= "todo-list">
                {this.props.newItem.map((item, index) => <ToDoItem key={index} index={index} item={item} />  )}
            </div>
        )
    }
}

