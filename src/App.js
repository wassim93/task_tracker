import React, {Component} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks : [
                {
                    id:1,
                    text:'doctor appointment',
                    day:'5 feb 2021',
                    reminder:true,
                },
                {
                    id:2,
                    text:'school meeting',
                    day:'20 dec 2021',
                    reminder:false,
                },
                {
                    id:3,
                    text:'Shopping',
                    day:'10 april 2021',
                    reminder:true,
                }
            ]

        }
    }
  render() {
      return (
          <div className="container">
              <Header/>
              <Tasks tasks={this.state.tasks}/>
          </div>
      );
  }
}




export default App;
