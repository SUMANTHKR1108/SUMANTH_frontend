import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const initialValue ={ count : 0 }

const reducer =(state, action) =>{
    switch (action.type) {
        case "increment":
            return { count : state.count+1}
            case "decrement":
                return{ count : state.count-1}
                case "reset":
                return{ count :0}
                default:
                    return state;
    }
}
const Reducer =()=>{
    const [state, dispatcher] = useReducer(reducer,initialValue)
    return (
        <div><h1>{state.count}</h1>
        <button onClick={()=>dispatcher({type:"increment"})}>increment</button>
        <button onClick={()=>dispatcher({type:"decrement"})}>decrement</button>
        <button onClick={()=>dispatcher({type:"reset"})}>reset</button>
        </div>
    )
}
export default Reducer