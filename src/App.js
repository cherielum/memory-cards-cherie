import React, {Component } from 'react'; 
import {Link, Route} from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';




class App extends Component {
    render() {
        return (

        <div>
            <div className= "navbar">
            <Link to = "/memory"> Memory Game </Link>
            <Link to = "/jobs"> Jobs </Link>
            </div>

            <Route path = "/memory" 
                   component = {MemoryGame}/>
            <Route path ="/jobs"
                   component =  {Jobs}/>

        </div>
        )
    }
}

export default App; 



