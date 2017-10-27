import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const deltask = (index) => ({type: "DELETE_TODO", index});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deltask}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {newItem: state.todos.data }
}

@connect(null, mapDispatchToProps)
@connect(mapStateToProps) 

export default class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.handleDel = this.handleDel.bind(this)
        this.handleDone = this.handleDone.bind(this)
    }
    state = {
        visible: true
    }
    handleDel(){
        this.props.deltask(this.props.index)
    }
    handleDone(){
        this.setState({visible: !this.state.visible})
    }

    render(){
        console.log(this.props.newItem);
        return(
            <div className={this.state.visible ? "item not-completed" : "item completed"}>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <div className='buttons'>
                    <button onClick = {this.handleDone}>Done</button>
                    <button onClick = {this.handleDel}>Delete</button>
                </div>
            </div>
        )
    }
}