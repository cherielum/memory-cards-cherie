import React, {Component } from 'react';
import './Jobs.css'

class Jobs extends Component {
    render (){
        return (
            <div className="App">
             <header className="App-header">
               <h1 className = "App-title"> Jobs in Atlanta </h1>,
                  <p className = "App-subtitle"> Click to explore jobs.</p>
             </header>
             <div className = "Jobs"> Loading...</div>
            </div>
             );
    }
}

export default Jobs;


 