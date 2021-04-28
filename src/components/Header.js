import React from "react";
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';

import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexDepartment from "./IndexDepartment";
import IndexCourse from "./IndexCourse";
import IndexStudents from "./IndexStudents";

export default class Header extends React.Component {


    render() {
        return (



            <nav class="navbar navbar-expand-lg  bg-success">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/Students">Students</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/Departments">Departments</Link>
                        </li>
                        <li class="nav-item">

                            <Link className="nav-link" to="/Courses">Courses</Link>

                        </li>

                    </ul>


                </div>
            </nav>



        )
    }
}

