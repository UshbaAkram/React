import react,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { increment,decrement,incrBy } from './CounterSlice';
import Display from '../../components/Dispaly';

const Counter = () => {
    const dispatch = useDispatch();
    const count= useSelector((state)=>state.counter.value)
    const[num,setNum]=useState(0);
    const handelClick=(e)=>{
        e.preventDefault();
        dispatch(incrBy(num))
        setNum('')
    }

    return (  <div>
        
        <Display /><p >{count}</p>
        <input value={num} onChange={(e)=>{setNum(e.target.value)}}/>
        <button onClick={handelClick}>chalo</button>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

    </div>);
}
 
export default Counter;