import './App.css';
import IndexStudents from './components/IndexStudents';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import AddStudent from './components/AddStudent'
import AddCourse from './components/AddCourse'
import DetailsStudent from './components/DetailsStudent';
import IndexDepartment from './components/IndexDepartment';
import AddDepartment from './components/AddDepartment';

import IndexCourse from './components/IndexCourse';
import EditCourse from './components/EditCourse';
import Header from './components/Header';
import EditDepartment from './components/EditDepartment';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <>
     
      <BrowserRouter>
      <Header />
      <Redirect exact from="/" to="Students" />
        <Switch>
          
          <Route path="/Students" component={IndexStudents} exact ></Route>
          <Route path="/AddStudent" component={AddStudent} exact></Route>
          <Route path="/DetailsStudent/:id" component={DetailsStudent} exact ></Route>
          <Route path="/Departments" component={IndexDepartment} exact ></Route>
          <Route path="/AddDepartment" component={AddDepartment} exact></Route>
          <Route path="/EditDepartment/:id" component={EditDepartment} exact></Route>
          <Route path="/Courses" component={IndexCourse} exact></Route>
          <Route path="/AddCourse" component={AddCourse} exact></Route>
          <Route path="/EditStudent/:id" component={EditStudent} exact></Route>

          
          <Route path="/EditCourse/:id" component={EditCourse} exact></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
