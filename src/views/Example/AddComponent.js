import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }

    handleChangeTitleJob = (event) => {
        this.setState({ title: event.target.value });
    }

    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value });
    }

    handleSubmit = () => {
        // alert('click submit')
        // console.log('check input: ', this.state);
        if (this.state.title === "" || this.state.salary === "") {
            alert("Bạn cần nhập đủ thông tin cả title và salary");
            return; // khi chạy vào trong khối if này và gặp return thì sẽ ngừng chạy các đoạn code phía dưới if
        }

        this.props.addNewJobss( // truyền sữ liệu cho hàm addNewJob bên component MyComponent và thực thi hàm addNewJob bên trong hàm MyComponent
            /**handleSubmit trong AddComponent: Chỉ xử lý việc thu thập dữ liệu từ input và truyền nó lên component cha (MyComponent) thông qua hàm addNewJobss (tức là addNewJob) */
            {
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                salary: this.state.salary,
            }
        )

        this.setState({ title: "", salary: "" });
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br /><br />
                <input
                    type="button"
                    value="Submit"
                    onClick={() => this.handleSubmit()}
                />
            </form>
        );
    }
}

export default AddComponent;