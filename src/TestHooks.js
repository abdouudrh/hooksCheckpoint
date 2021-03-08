import React,{useState , useEffect} from 'react';





const TestHooks = props => {
  
  const [count , setCount] = useState(0)
  /* const [fruit, setFruit ] = useState('Banana')
  const [todos , setTodos] =useState({text : 'learn Hooks'}) */
  useEffect (()=>{
      document.title=`you clicked ${count} time`
  })
  
  return (
    <div className ="App">

      <p>you Clicked {count}</p>
      <button  onClick={() => setCount (count +1) } >
        Click Me
      </button>

      {/* <p>this is {fruit}</p>
      <button onClick={() => setFruit('Apple')} >Click to change fruit</button>


     <p> learn {todos.text} </p>
     <button onClick={()=> setTodos({text : 'react'}) } >change</button> */}




        
    </div>
    
  )


}

export default TestHooks;