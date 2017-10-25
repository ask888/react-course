import React from 'react'

export default class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.itemDone = this.itemDone.bind(this)
        this.delSomePost = this.delSomePost.bind(this)
    }
        state = {visible: true}
    itemDone(){
        this.setState({visible: !this.state.visible})
        console.log(this.state.visible)

    }
    delSomePost(){
        this.props.itemDelete(this.props.index)

    }
    
    render(){
        return(
            <div className={this.state.visible ? "item not-completed" : "item completed"}>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.description}</p>
                <div className="buttons">
                    <button onClick = {this.itemDone}>Done</button>
                    <button onClick = {this.delSomePost}>Delete</button>
                </div>
            </div>
            
        )
    }


}