import React from 'react';
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import Particles from 'react-particles-js';

const Header = (props) => (
    
    <header className="header">
        <div className='particles-wrapper'>
            <div className='slider-wrapper'>
                <Slider>
                    <p>Do you know</p>        
                    <p>How horrible</p>        
                    <p>React is</p>        
                    <p>That's why</p>        
                    <p>Just keep calm</p>        
                    <p>And drink some wine</p>        
                </Slider>  
                
            </div> 
            <Particles className="particle-block"/>   
        </div> 
        <Menu/>  
        
        
        {/* <h1 className="page-title">React Lesson: 4 [ context, Children API ]</h1>
        <h3 className="description">
            Задания на сегодня:
        </h3>
        <ul className="tasks">
            <li>Создать компонент меню, с рабочими пунктами - "главная", "создать пост", инпут поиска  (3 балла)</li>
            <li>Написать `middleware` который будет обновлять данные в localStorage. (данные == посты) (3 балла)</li>
            <li>
                Создать компонент меню, с рабочими пунктами - "создать пост", инпут поиска (3 балла) и главная на
                которой должны отображатся все посты. ({`<Link/>`})
            </li>
            <li>Создать компонент инпута внешний вид которого будет зависеть от родительского компонента. [`context`] (не обязательно)</li>
            <li>
                Создать компонент Notify который будет отвечать за оповещение
                о том что ваш пост был успешно создан. Компонент должен быть `position: fixed` и удалятся из DOM через время.
            </li>
            <li>Сделать слайдер с использованием Children API</li>
            <li>Дополнительно: Использовать модуль react-transition-group для более плавной анимации слайдера.</li>
        </ul> */}
            
        
    </header>

);

export default Header;