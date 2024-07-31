import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    // state kiểm soát trạng thái của ứng dụng React
    // state là 1 object, array, string, boolean.....
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }


    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    };

    deleteJob = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== job)
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJobss={this.addNewJob} // truyền props cho AddComponent, khi click sumit thì sẽ gọi lại hàm addNewJob thông qua biến addNewJobss để add thêm phần tử vào arrJobs
                />
                <ChildComponent
                    deleteJob={this.deleteJob}
                    arrJobs={this.state.arrJobs}
                />
            </>
        );
    }
}

export default MyComponent;