import React, { Component } from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = { age: this.props.age };

    }
    
    addYear = () => {
        this.setState({ age: this.state.age + 1 })
    };



    render(){
        // const  firstName = this.props.firstName;
        // const lastName = this.props.lastName;
        const{ firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1> { lastName}, { firstName}</h1>
                <h3> Hair Color: { hairColor}</h3>
                <h3> Age: { this.state.age}</h3>
                <button onClick={ () => this.addYear() }>Birthday Button for {firstName} {lastName}</button>
            </div>
        ) ;
    }
}

export default PersonCard;