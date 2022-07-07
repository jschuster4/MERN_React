import React, { Component } from 'react'

class PersonCard extends Component{
    render(){
        // const  firstName = this.props.firstName;
        // const lastName = this.props.lastName;
        const{ firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1> Name: { firstName} { lastName}</h1>
                <h1> Hair Color: { hairColor}</h1>
                <h1> Age: { age}</h1>
            </div>
        ) ;
    }
}

export default PersonCard;