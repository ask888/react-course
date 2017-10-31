import React from 'react'

export default class Slider extends React.Component{
    constructor(props){
        super(props)
        this.slider = this.slider.bind(this)
    }
    state = {
        index: 0
    }
    
slider(){
    setInterval(() => {
            if(this.state.index == 5) {
                this.setState({index: 0});
            }
            else{ this.setState({index:this.state.index+1})
        }}, 2000)
      
}
componentDidMount = () =>{
    this.slider()
}


    render(){
        // console.log(this.state.index)
        return(
            <div className="slider-container">{this.props.children[this.state.index]}</div>
        )
    }
}