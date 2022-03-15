import React, {useState} from 'react';
import Tweet from './tweet'


  

function App(){


const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);
const [users] = useState([
    {name: "john", message: "bye", likes: "15"},
    {name: "mary", message: "hey", likes: "20"},
    {name: "jason", message: "crap", likes: "25"},
    {name: "jack", message: "hello", likes: "100"},
    {name:"david", message:"hello", likes:"10"},


]);

const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
};

    return (
        <div className='App'>
     

           
            {users.map(user => (
                <Tweet name={user.name} message={user.message} likes={user.likes} />
       
            ))}
            
 
          
            

            <button onClick={increment}>increment</button>
            <h1 className={isRed ? "red": "gray"}>{count}</h1>
          
            
   
        </div>
    )
}

export default App;