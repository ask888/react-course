import React from 'react';

import { addPost } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import Notify from '../components/Notify'


const mapDispatchToProps = dispatch => ( bindActionCreators({ addPost }, dispatch) );

@connect(null, mapDispatchToProps)
export default class AddPost extends React.Component {
    state = {
        visible: false
    }
    
    handleOnSubmit = (e) => {
        e.preventDefault();

        if(this.title.value.trim() !== '' || this.description.value.trim() !== '') {
            let new_post = {
                title: this.title.value,
                description: this.description.value
            };

            this.props.addPost(new_post);

            this.title.value = '';
            this.description.value = '';
            this.setState({visible:true})
            setTimeout(() => {this.setState({visible: false})}, 2000)
        }
       

        
        
    };

    render() {
        return (
            <div className='wrapper'>
                <Header />
                { this.state.visible  ? <Notify /> : null }
            <div className="add-post">
                <h3>Add new post</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref={instance => this.title = instance} placeholder="Post title"/>
                    <textarea ref={instance => this.description = instance} placeholder="Post content"/>
                    <button type="submit" >Создать новый пост</button>
                </form>
            </div>
            </div>
        );
    }
}