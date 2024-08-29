import React, { useState } from "react";

// layout for page

import Admin from "layouts/Admin.js";


import { bajaAlumno, altaAlumno } from "services/api/alumnos";
import Modal from "components/Alumnos/modals/AddUserModal";
import AllClases from "./AllClases";
import AddProgramas from "./programas/AddProgramas";
export default function Programas() {

  const [view, setView] = useState('Table'); //Table, AddUser, EditUser, ShowUser

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
 
  const handleDelete = (action) => {
    setTitle(action); 
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setTitle("");
  };

  const handleConfirm = () => {
    setShowModal(false);
  
  };

 
  return <>
   <Modal
        show={showModal}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={`Confirmar ${title}`}
        message={`¿Estás seguro de que deseas dar de ${title} a este alumno?`}
      />
             
  { 
  view === "Table" ? (<AllClases title = {title} setView={setView} handleDelete={handleDelete}></AllClases>)
  : view === "AddUser" ? (<AddProgramas setView={setView}></AddProgramas>)  : null}
    </>
}

Programas.layout = Admin; 
