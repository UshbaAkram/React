import React from 'react';
import { useSelector} from 'react-redux'

const Display = () => {
    const number= useSelector((state)=>state.counter.value)
    console.log(number)
    return ( <h1 style={{marginLeft:'1000px',marginBottom:'500px',marginTop:'0px',border:'1px solid gray'}}>{number}</h1> );
}
 
export default Display;