import React from 'react'
import AddItem from '../components/AddItem'
import ToDoList from '../components/ToDoList'
import AddToDoList from '../components/AddToDoList'
import { Route, Link} from 'react-router-dom'


export default class MainLayout extends React.Component{
    constructor(props){
        super(props)
        this.addToDoList = this.addToDoList.bind(this)
        this.itemDelete = this.itemDelete.bind(this)
        this.state = {
            posts: []
        } 
    
    }
    addToDoList(newInpVal, newTextVal){
        // меняю стейт. Меня пост: обращаюсь к старым постам через : и говорю, чем станут посты. Посты будут массивом, в который я запишу: ... старые посты, а через запятую передаю новые посты
        this.setState({posts:[...this.state.posts, {title: newInpVal, description: newTextVal}]}) 
    }
    
    itemDelete(delIndex){
        this.setState({posts: this.state.posts.filter(function(item, index){
            return index != delIndex
        })})

    }    



    render(){
        return(
            <div className="main-wrapper">
                <h1>Maya's TO DO list</h1>
                <AddToDoList funAdd={this.addToDoList}/>
                <ToDoList >
                   {this.state.posts.map((item, index) => <AddItem data={item} index={index} key={index} itemDelete={this.itemDelete} />)} 
                    
                </ToDoList>
                
            </div>
        )
    }
}