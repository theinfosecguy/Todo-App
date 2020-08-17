import React , { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component{

    constructor(props){
        super(props);
    }


    delete = (key) => {
        this.props.delete(key);
    }
    render(){

        var todoEntries = this.props.entries;
// Mapped the Entries & Turned it into a list item
        var listItems  = todoEntries.map((item)=>{
            return <div className="todoDiv" onClick={()=> this.delete(item.key)}
            key={item.key}>{item.text}</div>
        });


        return(
            <ul>
                <FlipMove duration={250} easing="ease-in-out">
                     {listItems}
                </FlipMove>
            </ul>
        );
    };
}

export default TodoItems;