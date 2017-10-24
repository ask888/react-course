import React from 'react';

import Post from '../components/Post';

export default class Posts extends React.Component {

    render() {
        return (
            <section className="posts-container">
                <div className="items">
                    {this.props.posts.map((item, index) => <Post key={index} key1 = {index} data={item} del = {this.props.delPost}/>)}
                </div>
            </section>
        )
    }
} 