import React from "react";
class ChildComponent extends React.Component {
    // state kiểm soát trạng thái của ứng dụng React
    // state là 1 object, array, string, boolean.....
    state = {
        toggle: false,
    }

    handleShowHide = () => {
        this.setState({ toggle: !this.state.toggle });
    }

    deleteButton = (id) => {
        this.props.deleteJob(id);
    }

    render() {
        // let name = this.props.name
        // sử dụng destructuring để đặt biến được gọn , nhanh, hiệu quả
        // props là dữ liệu được truyền vào vào components childComponent từ components cha MyComponent
        let { arrJobs } = this.props;
        let { toggle } = this.state;

        return (
            // sử dụng toán tử 3 ngôi để thực hiện điều kiện
            <>
                {toggle === false ?
                    < div ><button onClick={() => this.handleShowHide()}>Show</button></ div >
                    :
                    <>
                        {arrJobs.map((item, index) => <div key={index}>{item.title}: {item.salary} $  <button onClick={() => this.deleteButton(item.id)}>x</button></div>)}
                        <div> <button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

            // sử dụng điều kiện
            // <>
            //     {toggle && // nếu toggle true thì trả về vế 2, nếu toggle false thì dừng lại luôn (nếu tất cả đều true thì trả về vế cuối cùng tính từ trái qua phải)
            //         <>{arrJobs.map((item, index) => <div key={index}>{item.title}: {item.salary} $ </div>)}
            //             < div > <button onClick={() => this.handleShowHide()}>Hide</button> </ div >
            //         </>
            //     }

            //     {!toggle &&
            //         < div > <button onClick={() => this.handleShowHide()}>Show</button> </ div >
            //     }
            // </>
        )
    }
}

export default ChildComponent;