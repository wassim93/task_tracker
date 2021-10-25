import React, {Component} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from "axios";
import instance from "./config/config";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            showFrom: false
        }
    }


    componentDidMount() {
        axios.get("http://localhost:5000/tasks").then(response => {
            this.setState({tasks: response.data})
        }).catch((error) => {
            throw  error
        })
    }

    /* async componentDidMount() {
         try {
             const  response =  await axios.get("http://localhost:5000/tasks") ;
             const  response2 =  await axios.get("http://localhost:5000/tasks") ;

             const results = await  Promise.all([
                 axios.get("http://localhost:5000/tasks"),
                 axios.get("http://localhost:5000/tasks")
             ])
             Promise.
             this.setState({tasks:response.data})

         }catch (err){
             throw  err;
         }
     }*/


    addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...task}

        /* axios.post(`http://localhost:5000/tasks`,JSON.stringify(newTask),{"headers":headers}).then(response =>{
             console.log(response)
         }).catch((error)=>{
             console.log(error)
         })*/

        instance.post("/tasks", JSON.stringify(newTask)).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        this.setState({tasks: [...this.state.tasks, newTask]})
        //console.log(newTask)
    }

    deleteTask = (id) => {
        //const tasks = [...this.state.tasks].filter((task) => task.id !== id)

        instance.delete(`/tasks/${id}`).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        this.setState({tasks: this.state.tasks.filter((task) => task.id !== id)}, () => {
            //console.log('state changed')
        })
    }

    toggleReminder = (id) => {
        let foundTask = this.state.tasks.find((task) => task.id === id)
        foundTask = {...foundTask, reminder: !foundTask.reminder}
        //console.log(foundTask)
        instance.put(`/tasks/${id}`, JSON.stringify(foundTask)).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        const newList = this.state.tasks.map((task) => task.id === id ?
            {
                ...task,
                reminder: !task.reminder
            }
            : task)

        this.setState({tasks: newList})
    }

    showTask = () => {
        this.setState({showFrom: !this.state.showFrom})
    }

    render() {
        return (
            <div className="container">
                <Header showTask={this.showTask} buttonText={this.state.showFrom}/>
                {this.state.showFrom && <AddTask onAdd={this.addTask}/>}
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


