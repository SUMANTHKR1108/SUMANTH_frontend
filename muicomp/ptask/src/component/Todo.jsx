import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
    return [...state,{...action.data,complete:false}]
    case "edit":
        return[...state,{...action.data,complete:false}]
        case"Delete":
        return[...state,{...action.data,complete:true}]
    default:
      return state;
  }
}

const Todo =()=> {
  const [input,setInput] = useState({})
  const [state,dispatch] = useReducer(reducer,[])
  return (
    <div>
        <h1>{JSON.stringify(state)}</h1>
        <input type="text" onChange={(e)=>{setInput({...input,id:e.target.value})}}/>
        <input type="text" onChange={(e)=>{setInput({...input,title:e.target.value})}}/>
      <button onClick={()=>dispatch({type:"add",data:input})}>ADD</button>
      <button onClick={()=>dispatch({type:"add",data:input})}>Edit</button>
      <button onClick={()=>dispatch({type:"delete",data:input})}>Delete</button>

      
    </div>
  )

}

export default Todo