import { useState } from "react"
function Counter(){
var [counter, setcounter]=useState(3)
const count=()=>{
   setcounter( counter+1)


}
const remove=()=>{
    setcounter(counter-1)
 }
    return(
        <div className="main"> 
        <h1>Counter in React js</h1>
         
        <button onClick={count}>Add Values {counter}</button>
        <br />
        <button onClick={remove}>remove Values {counter}</button>
    
     </div>
    );
}
export default Counter;