import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashbord from '../dashbord/Dashbord'
import Login from '../login/Login'
import Header from '../header/Header'
import Food_management from "../food_management/food_mng"; 
import Add_food from '../add_food/Add_food'
import Edit_food from '../edit_food/Edit_food';

const Manage_bord = (props) => {
  const [reRender,setReRender]= useState(0);
  const reRender_func =e=>{
setReRender(e);

  }
    return (
      <div className="mange">
        <Router>
          <Header data={reRender} />
          <Route path="/login">
            <Login data={reRender_func} />
          </Route>
          <div className="mang">
            <Switch>
              <Route path="/" exact>
                <Dashbord />
              </Route>
              <Route path="/dashbord">
                <Dashbord />
              </Route>
              <Route path="/food_management">
                <Food_management />
              </Route>
              <Route path="/add_food">
                <Add_food />
              </Route>
              <Route path="/edit-item/:id">
                <Edit_food  />
              </Route>
              
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default Manage_bord;
