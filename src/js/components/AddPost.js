import React from 'react'

class AddPost extends React.Component{
  constructor (props){
    super(props)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

handleOnSubmit(event){
  event.preventDefault();
  if(this.refs.titleInput.value !== "" && this.refs.descriptionInput.value !== ""){
    let newObj = {"title": this.refs.titleInput.value, "description": this.refs.descriptionInput.value,}
    this.props.addNewPost(newObj)
  }
  else if(this.refs.titleInput.value == ""){
    this.refs.titleInput.focus();
  }
  else if(this.refs.descriptionInput.value == ""){
    this.refs.descriptionInput.focus();
  }
  

}

  render(){
    return(
      <div className="add-post">
        <form onSubmit = {this.handleOnSubmit}>
          <input type="text" placeholder="Title" ref="titleInput"  />
          <input type="text" placeholder="Description" ref="descriptionInput" />
          <button>Submit</button>
          
        </form>
      </div>
    )
  }

}
export default AddPost


