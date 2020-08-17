import React , {Component}from "react";
import TodoItems from './TodoItems'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }


    addItem = (e)=>{

        if(this._inputElement.value!==""){
            var newItem ={
                text:this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState)=>{
                return {
                    items : prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
        console.log(this.state.items)
        e.preventDefault();
    }

    deleteItem = (key)=>{
        var restItems = this.state.items.filter((item)=>{
            return (item.key!==key)
        });
        
        this.setState({
            items:restItems
        });
    }

    render(){
        return(
            <div className="todoList">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input 
                        ref={(el)=> this._inputElement = el}
                        placeholder="Enter Task"
                        className="textField"
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems 
                entries={this.state.items}
                delete={this.deleteItem}
                />

            </div>
        );
    }
}

export default TodoList;