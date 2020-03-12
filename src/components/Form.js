import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        /*
            TODO - set initial state for link name and URL 

        */

       this.state={
            name:"",
            URL:""
       }

      // this.updateNameLabel = this.updateNameLabel.bind(this)
    }

  /*  handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
      // this.setState({
      //      name: event.target.value
      // })
   // } 
    updateNameLabel = (event) => {
        console.log(event.target)
        this.setState({
            name: event.target.value
        })
    }
    updateURLLabel = (event) => {
        console.log(event.target)
        this.setState({
            URL: event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.props.handleSubmit(this.state)
       this.setState({
           name: '',
           URL: ''
       })

    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="name">Name</label>
                <input 
                    type="text"
                    onChange={this.updateNameLabel}
                    value={this.state.name}
                />
                <label for="URL">URL</label>
                <input 
                    type="text"
                    onChange={this.updateURLLabel}
                    value={this.state.URL}
                />


                <button type="submit"> Submit</button>
            </form>
        )
    
    }
}

export default Form;
