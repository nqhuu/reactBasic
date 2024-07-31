import React from "react";
import './ListTodo.scss';
import AddTodo from './AddTodo.js';
import { toast } from 'react-toastify'; //sử dung toast cảnh báo import từ ngoài


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Todo 1' },
            { id: 'todo2', title: 'Todo 2' },
            { id: 'todo3', title: 'Todo 3' },
        ],
        editTodo: {}
    }

    // add thêm todo
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }

    // delete Todo
    deleteTodo = (todo) => {
        this.setState({
            listTodos: this.state.listTodos.filter(item => item.id !== todo.id)
        })
        toast.success("Bạn đã xóa thành công", todo.title)
    }

    // edit todo
    handleEditTodo = (todo, index) => {
        let { listTodos, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        // let idObjEdit = listTodos.findIndex(Todo => Todo.id === todo.id) //nếu không sử dụng index từ map thì ta phải thêm bước tìm index

        // edit nội dung
        if (!isEmpty && editTodo.id === todo.id && editTodo.title !== listTodos[index].title) {
            let listTodosCopy = [...this.state.listTodos]
            listTodosCopy[index].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {} // cập nhật editTodo về rỗng để render lại giao diện ban đầu với các điều kiện phía dưới render
            })
            toast.success("Edit Succes")
            return;
        }

        // nếu không cập nhật nội dung gì
        if (!isEmpty && editTodo.id === todo.id && editTodo.title === listTodos[index].title) {
            this.setState({
                editTodo: {}
            })
            toast.warning("Bạn chưa cập nhật nội dung")
            return;
        }

        // bắt đầu edit, lấy nội dung edit về editTodo
        this.setState({
            editTodo: todo
        })

    }

    // cập nhật dữ liệu cho editTodo để sử dụng xử lý cho việc editTodo
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    // ngưng editTodo
    handleCancelEditTodo = () => {
        this.setState({
            editTodo: {}
        })
        toast.warning("Bạn đã hủy cập nhật")
    }


    render() {
        let { listTodos, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {!isEmpty && editTodo.id === item.id ?
                                        <>
                                            {index + 1} - <input
                                                value={editTodo.title}
                                                onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                            <button onClick={() => this.handleCancelEditTodo(item, index)}>
                                                Thoát
                                            </button>
                                        </>
                                        :
                                        <span> {index + 1} - {item.title}</span>
                                    }
                                    <button onClick={() => this.handleEditTodo(item, index)}>
                                        {!isEmpty && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>

                                    <button
                                        onClick={() => this.deleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;