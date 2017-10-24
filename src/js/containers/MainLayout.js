import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';
import AddPost from '../components/AddPost';

// Основной компонент который в котором находиться все наше
// приложение, в дальнейшем именно этот компонент будет использован
// параметром функции ReactDOM.render();
export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {title: "react", description: "Hoodie lectus molestie nibh vulputate congue quisque massa enim foodie urna auctor massa amet porta adipiscing amet orci tofu adipiscing. Lorem tellus odio donec risus molestie non hoodie proin tempus gravida arcu morbi ultricies urna at food truck gravida quisque ultricies. Nam porttitor a ipsum sem before they sold out non fusce congue adipiscing massa orci ipsum duis wire-rimmed glasses nam. Sodales ligula lectus nam commodo sagittis arcu bicycle lorem tempus cursus metus auctor fusce ut curabitur. Fixie enim vivamus porta proin morbi urna eu fusce mustache arcu gravida mauris cursus in auctor ipsum amet organic."},
                {title: "react-router", description: "Hoodie lectus molestie nibh vulputate congue quisque massa enim foodie urna auctor massa amet porta adipiscing amet orci tofu adipiscing. Lorem tellus odio donec risus molestie non hoodie proin tempus gravida arcu morbi ultricies urna at food truck gravida quisque ultricies. Nam porttitor a ipsum sem before they sold out non fusce congue adipiscing massa orci ipsum duis wire-rimmed glasses nam. Sodales ligula lectus nam commodo sagittis arcu bicycle lorem tempus cursus metus auctor fusce ut curabitur. Fixie enim vivamus porta proin morbi urna eu fusce mustache arcu gravida mauris cursus in auctor ipsum amet organic."},
                {title: "redux", description: "Hoodie lectus molestie nibh vulputate congue quisque massa enim foodie urna auctor massa amet porta adipiscing amet orci tofu adipiscing. Lorem tellus odio donec risus molestie non hoodie proin tempus gravida arcu morbi ultricies urna at food truck gravida quisque ultricies. Nam porttitor a ipsum sem before they sold out non fusce congue adipiscing massa orci ipsum duis wire-rimmed glasses nam. Sodales ligula lectus nam commodo sagittis arcu bicycle lorem tempus cursus metus auctor fusce ut curabitur. Fixie enim vivamus porta proin morbi urna eu fusce mustache arcu gravida mauris cursus in auctor ipsum amet organic."},
                {title: "jsx", description: "Hoodie lectus molestie nibh vulputate congue quisque massa enim foodie urna auctor massa amet porta adipiscing amet orci tofu adipiscing. Lorem tellus odio donec risus molestie non hoodie proin tempus gravida arcu morbi ultricies urna at food truck gravida quisque ultricies. Nam porttitor a ipsum sem before they sold out non fusce congue adipiscing massa orci ipsum duis wire-rimmed glasses nam. Sodales ligula lectus nam commodo sagittis arcu bicycle lorem tempus cursus metus auctor fusce ut curabitur. Fixie enim vivamus porta proin morbi urna eu fusce mustache arcu gravida mauris cursus in auctor ipsum amet organic."},
                {title: "virtual-dom", description: "Hoodie lectus molestie nibh vulputate congue quisque massa enim foodie urna auctor massa amet porta adipiscing amet orci tofu adipiscing. Lorem tellus odio donec risus molestie non hoodie proin tempus gravida arcu morbi ultricies urna at food truck gravida quisque ultricies. Nam porttitor a ipsum sem before they sold out non fusce congue adipiscing massa orci ipsum duis wire-rimmed glasses nam. Sodales ligula lectus nam commodo sagittis arcu bicycle lorem tempus cursus metus auctor fusce ut curabitur. Fixie enim vivamus porta proin morbi urna eu fusce mustache arcu gravida mauris cursus in auctor ipsum amet organic."},
                {title: "components", description: "Hoodie lectus molestie nibh vulputate congue quisque massa enim foodie urna auctor massa amet porta adipiscing amet orci tofu adipiscing. Lorem tellus odio donec risus molestie non hoodie proin tempus gravida arcu morbi ultricies urna at food truck gravida quisque ultricies. Nam porttitor a ipsum sem before they sold out non fusce congue adipiscing massa orci ipsum duis wire-rimmed glasses nam. Sodales ligula lectus nam commodo sagittis arcu bicycle lorem tempus cursus metus auctor fusce ut curabitur. Fixie enim vivamus porta proin morbi urna eu fusce mustache arcu gravida mauris cursus in auctor ipsum amet organic."}
            ]
        };

        this.delPost = this.delPost.bind(this)
        this.addPost = this.addPost.bind(this)
    }
    delPost(del_index){
        this.setState({posts:this.state.posts.filter(function(item, index){
            return index != del_index
        }
        )})
    }
    addPost(newObj){
        this.setState({posts:[newObj, ...this.state.posts]})
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="page-title">React Lesson: 1 [ Components, JSX, state & props ]</h1>
                <Header />
                <AddPost addNewPost = {this.addPost}/>
                <Posts posts={ this.state.posts } delPost = {this.delPost} />
                
            </div>
        );
    }
}