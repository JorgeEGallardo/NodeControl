import React, { useEffect, useState } from "react";

// components

import AlumnosTable from "components/Alumnos/AlumnosTable";

// layout for page

import Admin from "layouts/Admin.js";


import {fetchAlumnosStatus} from "services/api/alumnos"
import Modal from "components/Alumnos/modals/AddUserModal";
export default function AllAlumnos({setView, setSelectedUser, handleDelete, title}) {
  const [alumnos, setAlumnos] = useState([]);
  const [status, setStatus] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [fetchedAlumnos, setFetchedAlumnos] = useState([]);
 
  useEffect(() => {
    async function getAlumnos() {
      if (title !== "") return 1;
      const data = await fetchAlumnosStatus(status);
      setAlumnos(data);
      setFetchedAlumnos(data);

    }

    getAlumnos();
  }, [status, title]);



useEffect(() => {
  const filteredAlumnos = fetchedAlumnos.filter(alumno =>
    alumno.nombre.toLowerCase().includes(searchText.toLowerCase()) || alumno.id_alumno.toLowerCase().includes(searchText.toLowerCase())
  );
  setAlumnos(filteredAlumnos);

}, [searchText, fetchedAlumnos]);

  return (
    <>
      <div className="flex flex-wrap mt-4">
     
        <div className="w-full mb-12 px-4"> 
          <AlumnosTable color="dark" searchText={searchText} setSearchText={setSearchText} alumnos={alumnos} handleDelete={handleDelete} status={status} setStatus={setStatus} setView={setView} setSelectedUser={setSelectedUser}/>
        </div>
      </div>
    </>
  )
}

AllAlumnos.layout = Admin; 
