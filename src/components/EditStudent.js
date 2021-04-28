import React from "react"
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';


export default class EditStudent extends React.Component {


    constructor(props) {

        super(props)
    }
    // intialize data in state
    state = { Departments: [], Courses: [], Name: '', Age: '', Email: '', DepartmentID: '', StuCourse: [] }

    componentDidMount() {
        this.getStudentDetails();
        this.getDepartments();
        this.getCourses();

    }


    getStudentDetails() {

        axios("http://localhost:8080/Students/details/" + this.props.match.params.id).then(res => {

            console.log("amr" + res.data); this.setState({
                Name: res.data.Name,
                Age: res.data.Age,
                Email: res.data.Email,
                DepartmentID: res.data.Department._id,
                StuCourse: res.data.Courses
            })

        });
    }

    // get all departments
    getDepartments() {
        axios("http://localhost:8080/Departments/list").then(res => { console.log(res); this.setState({ Departments: res.data }) });
    }


    // get all courses
    getCourses() {
        axios("http://localhost:8080/Course/getAll").then(res => { console.log(res); this.setState({ Courses: res.data }) })
    }

    // get selected courses
    handleInputCoursesChange(event) {

        const target = event.target;
        var value = target.value;
        if (target.checked) {
            this.state.StuCourse.push(value);
        } else {
            this.state.StuCourse.splice(value, 1);
        }
    }

    // edit student
    editStudent = () => {
        debugger;
        let myprops = this.props;
        axios.post('http://localhost:8080/Students/edit/' + this.props.match.params.id, {
            Name: this.state.Name,
            Age: this.state.Age,
            Email: this.state.Email,
            Department: this.state.DepartmentID,
            Courses: this.state.StuCourse
        }).then(function (response) { console.log(response); myprops.history.push("/Students") }).catch(r => console.log(r))

    }


    render() {
        return (

            <div className="row justify-content-center ">
                <div className="p-5  w-50  ">

                    <input className="name form-control m-2" type="text" placeholder="Name" value={this.state.Name} onChange={(e) => this.setState({ Name: e.target.value })} />
                    <input className="age form-control m-2" type="number" placeholder="Age" value={this.state.Age} onChange={(e) => this.setState({ Age: e.target.value })} />
                    <input className="username form-control m-2" type="text" placeholder="Email" value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} />
                    <label>select Department </label>

                    <select className=" form-control m-2" value={this.state.DepartmentID} onChange={(e) => { this.setState({ DepartmentID: e.target.value }) }}>

                        {


                            this.state.Departments.map(e => {


                                return (
                                    <option value={e._id} >{e.Name}</option>
                                )
                            })
                        }
                    </select>
                    <label>select Courses </label><br />
                    {

                        this.state.Courses.map(e => {

                            return (
                                <div class="form-check form-check-inline">

                                    <input class="form-check-input" defaultChecked={this.state.StuCourse.find(t => t._id == e._id)} type="checkbox" id="inlineCheckbox1" value={e._id}
                                        onChange={this.handleInputCoursesChange.bind(this)} />


                                    <label class="form-check-label" for="inlineCheckbox1">{e.Name}</label>
                                </div>

                            )
                        })
                    }
                    <br />
                    <input className="btn btn-info  w-50 mt-2" type="button" value="Save" onClick={this.editStudent} />
                </div>
            </div>

        )
    }
}

