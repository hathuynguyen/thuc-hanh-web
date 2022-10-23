import * as React from"react";
import * as ReactDOM from "react-dom";
import MyButton2 from "../Component/MyButton2";
import MyList from "../Component/MyList";

const appState ={
    text: "My Button",
    disable: true,
    items:["First", "Second", "Third"],
};
 function render(props){
    root.render(
        <main>
            <MyButton2 text={props.text} disable={props.disable}/>
            <MyList items={props.items} />
        </main>
    );
 }
 render(appState);
 setTimeout(()=>
 {
    appState.disable = false;
    appState.items.push("Fourth");

    render(appState);
 }, 1000)
