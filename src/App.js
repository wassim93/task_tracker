import React, {Component} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    text: 'doctor appointment',
                    day: '5 feb 2021',
                    reminder: true,
                },
                {
                    id: 2,
                    text: 'school meeting',
                    day: '20 dec 2021',
                    reminder: false,
                },
                {
                    id: 3,
                    text: 'Shopping',
                    day: '10 april 2021',
                    reminder: true,
                }
            ],
            showFrom:false
        }
    }

    addTask = (task) => {
        const id = Math.floor(Math.random()*1000)+1
        const newTask = {id,...task}

        this.setState({tasks:[...this.state.tasks,newTask]})
        console.log(newTask)
    }

    deleteTask = (id) => {
        //const tasks = [...this.state.tasks].filter((task) => task.id !== id)
        this.setState({tasks: this.state.tasks.filter((task) => task.id !== id)}, () => {
            console.log('state changed')
        })
    }

    toggleReminder = (id) => {
        const foundTask = this.state.tasks.map((task) => task.id === id ? {
            ...task,
            reminder: !task.reminder
        } : task)
        this.setState({tasks: foundTask})
    }

    showTask = () => {
        this.setState({showFrom: !this.state.showFrom})
    }

    render() {
        return (
            <div className="container">
                <Header showTask={this.showTask} buttonText={this.state.showFrom}/>
                { this.state.showFrom &&  <AddTask onAdd={this.addTask}/>  }
                {
                    this.state.tasks.length > 0 ?
                        <Tasks tasks={this.state.tasks} onDelete={this.deleteTask}
                               onDoubleClick={this.toggleReminder}/> : 'No Available tasks'
                }
            </div>
        );
    }
}


export default App;
