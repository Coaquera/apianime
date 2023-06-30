import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {insert} from '../store/search/searchSlice'

export const Search = () => {

    const {input} = useSelector(state => state.searched);
   
    const dispatch = useDispatch();
    

    const [value, setvalue] = useState(input);
  
    const handlesubmit = (event) => {
        event.preventDefault();
        //console.log(event);

        dispatch(insert(value));
    }

    const handlechange = ({target}) => {
        setvalue(target.value);
    }

    return (
    <>
    <form onSubmit={handlesubmit}>
        <input
            type="text"
            value={value}
            placeholder="vacio"
            onChange={handlechange}
            >
        
        </input>
    </form>
    {<p>Provando el valor de:  {input} </p>}
    </>
  )
}
