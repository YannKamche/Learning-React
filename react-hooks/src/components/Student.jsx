import React, { useContext, useState } from "react";
import { StudentContext } from "../App";

const Student = () => {
  const initialValue = {
    name: "",
    matricule: "",
  };
  
    const [userInfo, setInfo] = useState(initialValue);

    const handleChange = e => {
        setInfo(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const studentInfo = useContext(StudentContext)

    const handleName = () => studentInfo.userAction({type: 'addName', value: userInfo.name })
    const handleMatricule = () => studentInfo.userAction({type: 'addMatricule', value: userInfo.matricule})

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userInfo.name}
        />
        <input
          type="text"
          name="matricule"
          onChange={handleChange}
          value={userInfo.matricule}
        />
      </div>
      <div className="flex gap-3">
        <button className="text-white p-2 rounded-lg bg-black" onClick={handleName}>
          Add name
        </button>
        <button className="text-white p-2 bg-black rounded-lg" onClick={handleMatricule}>Add matricule</button>
      </div>
    </div>
  );
};

export default Student;
