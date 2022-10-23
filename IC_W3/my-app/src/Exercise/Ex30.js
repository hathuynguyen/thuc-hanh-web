import React, { Component } from 'react'

export default class Ex30 extends Component {
    onCharge(){
        console.log("changed");
    }
    onBlur(){
        console.log("blured");
    }
    render(){
        return <input onChange={this.onCharge} onBlur={this.onBlur} />
    }
}
