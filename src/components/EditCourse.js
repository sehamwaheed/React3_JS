import React from "react"
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';


export default class EditCourse extends React.Component {


   
    constructor(props) {
        super(props)
    }



    componentDidMount() {
        this.getCourseDetails()
    }

    

    // intialize data in state
    state = { CourseName: '' }



    // get course details

    getCourseDetails() {
        axios("http://localhost:8080/Course/details/" + this.props.match.params.id).then(res => {
            console.log(res); this.setState({
                CourseName: res.data.Name,
            })
        });
    }


    // edit course
    EditCourse = () => {
        let myprop = this.props;
        axios.post('http://localhost:8080/Course/edit/' + this.props.match.params.id, {
            Name: this.state.CourseName,
        }).then(function (response) {
            if (response.data == "can't edit it because students related with") {
                alert(response.data)
               }
            else{ myprop.history.push("/Courses") }
        })
    }



    render() {
        return (

            <div className="row justify-content-center ">
                <div className="p-5  w-50  ">
                    <input className="name form-control m-2" type="text" placeholder="Name" value={this.state.CourseName} onChange={(e) => this.setState({ CourseName: e.target.value })} />                   
                    <input className="btn btn-info  w-50 mt-2" type="button" value="Save" onClick={this.EditCourse} />
                </div>
            </div>

        )
    }
}

