import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./paginas/auth/Login";
import AgregarClientes from "./paginas/modulos/AgregarClientes";
import EditarClientes from "./paginas/modulos/EditarClientes";
import Registro from "./paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./paginas/modulos/MostrarClientes";




function App() {
  return (
    <div className="App">

      <Fragment>
      <Router>
        <Routes>

          <Route path="/" exact element = {<Login/>}></Route>
          <Route path="/Registro" exact element = {<Registro/>}></Route>
          <Route path="/Home" exact element = {<Home/>}></Route>          
          <Route path="/Clientes" exact element = {<MostrarClientes/>}></Route>          
          <Route path="/Clientes/agregar" exact element = {<AgregarClientes/>}></Route>
          <Route path="/Clientes/editar/:id" exact element = {<EditarClientes/>}></Route>

        </Routes>
      </Router>
      </Fragment>
   
    </div>
  );
}

export default App;
