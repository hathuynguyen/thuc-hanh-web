import React, { Component } from 'react'

export default class Ex11 extends Component {
    state ={
        heading: "React Awesomesauce (Busy)",
        content: "Loading...",
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({
                heading: "React Awesomesauce",
                content: "Done!",
            });
        }, 3000);
    }
  render() {
    const {heading, content} =this.state;
    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
