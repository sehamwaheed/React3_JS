import React from "react";
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';


export default class IndexStudents extends React.Component {

  state = { Students: [] }

  componentDidMount() {
    this.getStudents();

   
  }


  // get all studennts

  getStudents() {
    axios("http://localhost:8080/Students/list").then(res => { console.log(res.data); this.setState({ Students: res.data }) });
   
  }



  // delete  student
  deleteStudent = (id) => {
    axios("http://localhost:8080/Students/delete/" + id).then(res => {
      this.setState({ Students: res.data })
    }).catch(r => { console.log(r) });



  }


  render() {

    
    
   
      return (

        <div className="text-left p-2">
          { <Link className="btn" to={{ pathname: "/AddStudent" }} replace  >new</Link>}

          <table className="table">
            <thead>
              <tr className="row">
                <th className="col text-center">Name</th>
                <th className="col text-center">Age</th>
                <th className="col text-center">Email</th>
                <th className="col text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.Students.map(element => {
                  return (
                    <tr className="row">
                      <td className="col text-center">{element.Name}</td>
                      <td className="col text-center">{element.Age}</td>
                      <td className="col text-center">{element.Email}</td>
                      <td className="d-flex col text-center">
                        {<Link className="btn " to={{pathname:"/EditStudent/"+element._id }} replace >Edit</Link> }
                        { <Link className="btn" to={{pathname:"/DetailsStudent/"+element._id }} replace >Details</Link> }
                        <button className="btn" onClick={() => this.deleteStudent(element._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      )
  }
}
