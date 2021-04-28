import React from "react"
import axios from 'axios'
export default class EditDepartment extends React.Component {

    constructor(props) {
        debugger
        super(props);
    }




    componentDidMount() {
        this.getDepartmentDetails()
    }

    

    // intialize data in state
    state = { DepartmentName: '' }



    // get department details

    getDepartmentDetails() {
        axios("http://localhost:8080/Departments/details/" + this.props.match.params.id).then(res => {
            console.log(res); this.setState({
                DepartmentName: res.data.Name,
            })
        });
    }


    // edit department
    EditDepartment = () => {
        let myprop = this.props;
        axios.post('http://localhost:8080/Departments/edit/' + this.props.match.params.id, {
            Name: this.state.DepartmentName,
        }).then(function (response) {
            if (response.data == "department is updated") { myprop.history.push("/Departments") }
            else{alert(response.data)}
        })
    }


    render() {
        return (

            <div className="row justify-content-center ">
                <div className="p-5  w-50  ">
                    <input className="name form-control m-2" type="text" placeholder="Name" value={this.state.DepartmentName} onChange={(e) => this.setState({ DepartmentName: e.target.value })} />
                    <input className="btn btn-info  w-50 mt-2" type="button" value="Save" onClick={this.EditDepartment} />
                </div>
            </div>

        )
    }
}