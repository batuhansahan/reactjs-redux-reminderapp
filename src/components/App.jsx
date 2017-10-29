import React, { Component } from 'react';

class App extends Component {
    render(){
        return(
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
            <div className="form-inline">
                <div class="from-group">
                    <input 
                        className="form-control"
                        placeholder="I have to ..."
                    />
                    <button 
                        type="button"
                        className="btn btn-success"
                    >
                        Reminder
                    </button>
                </div>
            </div>
            </div>
        )
    }
}

export default App;