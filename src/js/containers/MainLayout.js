import React from 'react'
import ToDoItem from '../components/ToDoItem'
import ToDoList from '../components/ToDoList'
import AddToDoList from '../components/AddToDoList'
import { Route, Link} from 'react-router-dom'


export default class MainLayout extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className='main-wrapper'>
                <h1>Maya's TODO list</h1>
                <div className='links-wrapper'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/add'>Add </Link>
                </div>
                
                <Route exact path='/' component={ToDoList} />
                <Route path= '/add' component={AddToDoList} />
            </div>
        )
    }
}

