import React, { useReducer } from 'react'
import Student from './components/Student';

//initial state 
const initialValue = {
  name: [],
  matricule: []
}
//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: [...state.name, `${action.value}, `] }
    case 'addMatricule':
      return { ...state, matricule: [...state.matricule, `${action.value}, `] };
  }
}

//context
export const StudentContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue)

   return (
     <div className="flex flex-col justify-center items-center bg-slate-300 gap-3 w-screen h-screen">
       <p>Name: { state.name}</p>
       <p>Matricule: { state.matricule}</p>
       <StudentContext.Provider value={{ user: state, userAction: dispatch }}>
         <Student />
       </StudentContext.Provider>
     </div>
   );
}

export default App
