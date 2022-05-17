import React from "react";
const Counter=({initialValue,index})=>{
    const [count,setCount]=React.useState(initialValue);
    return (
        <div>
            <h1 >Counter <span color="green" style={{color:count%2!==0?'green':'red'}}>{count}</span></h1>
            
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>double</button>
        </div>
    )
}
export default Counter;


//
// import React from "react";
// const Counter=({initialValue})=>{
//     const [count,setCount]=React.useState(initialValue);
//     return (
//         <div>
//             <h1>Counter App:{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//         </div>
//     )
// }
// export default Counter;