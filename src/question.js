import {MdAdd} from 'react-icons/md';
import {FiMinus} from 'react-icons/fi';
import { useState } from 'react';
const Question=({id,title,info})=>{
    const [requied,setRequied]=useState(true);
    const Add=()=>{
        let newRequied=!requied;
        return(
        setRequied(newRequied)
        )
    }
return(
<div className="question">
    <h2>{title}</h2>
   {requied && <p>{info}</p>}
    <button className='icon-add' onClick={Add}>
        {requied ? <FiMinus />:<MdAdd />}
    </button>
</div>)
}
export default Question;