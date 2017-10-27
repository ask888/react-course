 import React from 'react'
 import ReactDOM from 'react-dom';
 import {BrowserRouter as Router} from 'react-router-dom'
 import {Provider} from 'react-redux'

 import{createStore, combineReducers} from 'redux'


 
 import '../sass/common.scss';
 
 // На текущий момент, этот компонент является основным корневым
 // компонентом в который вложены остальные компоненты.
 import MainLayout from "./containers/MainLayout";
//  console.log(MainLayout);

 function todos(state = {data: []}, action){ 
     let payload = action.payload
     let type = action.type
     let index = action.index

     switch(type){
         case "ADD_TODO": {
             return {...state, data: [...state.data, payload]};
         }
         case "DELETE_TODO": {
             return {...state, data: state.data.filter((item, i) => i != index)}
         }
        //  case "DONE_TODO": {
        //      return {...state, data: state.data}
        //  }
         default: return state;
     }
 }
 const reducers = combineReducers({
     todos
 })
 const store = createStore(reducers)
 
 
 // Метод render() -> взятый из отдельного модуля от React. ReactDOM является дополнительным пакетом входящим
 // в экосистему React, которая отвечает за работу с DOM элементами, как виртуального DOM, так и настоящего ()
 ReactDOM.render(
     <Provider store={store}>
         <Router>
            <MainLayout />
        </Router>
     </Provider>
    , document.getElementById('app'));
 
 // Это корневой файл проекта, именно он будет указан в webpack как файл входа.
 // Эго особенность заключается в том что в нем осуществляется первый и последний запрос
 // к настоящему DOM и вставляется в него все наше приложение.