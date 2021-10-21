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
    deleteTask = (id) => {
        //const tasks = [...this.state.tasks].filter((task) => task.id !== id)
        this.setState({tasks:this.state.tasks.filter((task) => task.id !== id)},()=>{
            console.log('state changed')
        })
    }
  render() {
      return (
          <div className="container">
              <Header/>
              <Tasks tasks={this.state.tasks} onDelete={this.deleteTask}/>
          </div>
      );
  }
}




export default App;
