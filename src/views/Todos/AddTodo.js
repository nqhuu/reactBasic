import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnchangeTitle = (event) => {
        this.setState({ title: event.target.value })
    };

    handleAddTodo = () => {
        if (!this.state.title) {
            // alert("Please select a title");
            toast.warning("Bạn cần nhập dữ liệu!")
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
        }

        this.props.addNewTodo(todo);
        this.setState({ title: '' }); // clear input field after adding a todo.
    }



    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnchangeTitle(event)}
                />
                <button
                    type="button"
                    className="add-todo"
                    onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;