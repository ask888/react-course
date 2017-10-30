import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { editPost} from '../actions'
import {Post} from './Post'

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({editPost}, dispatch)

const mapStateToProps = (state, ownProps) => {
    return{ data: state.posts.find((item, i) => i === +ownProps.id)}
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Edit extends React.Component{
    handleOnSubmit = event => {
        event.preventDefault()
        let new_post = {title: this.refs.title.value, description: this.refs.description.value}
        this.props.editPost(this.props.id, new_post)
        this.props.editPostClose(null)

    }
    render() {
        return (
           <div className="modal">
                <div className="add-post">
                <h3>Edit post</h3>
                
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Post title" defaultValue={this.props.data.title} />
                    <textarea ref="description" placeholder="Post content" defaultValue={this.props.data.description} />
                    <button type="submit">Save</button>
                </form>
                </div>
            </div>
        );
    }
}