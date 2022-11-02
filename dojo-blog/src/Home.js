import { useState } from "react";
const Home = () => {
    //let name = 'mario';//not reactive, to make it reactive use a hook 
    const [name, setName]=useState('mario');
    const [age, setAge] =useState(10);
    const handleClick = (e) =>{
        setName('luigi');
        setAge(19);
    }
    
    
    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me!</button>
            <p>{name} is {age} years old</p>
        </div>
     );
}
 
export default Home;