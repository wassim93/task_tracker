import React, {Component} from 'react';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            day: '',
            reminder: false

        }
    }


    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.text) {
            alert("pleaase add a task title")
            return
        }
        const obj = {
            text: this.state.text,
            day: this.state.day,
            reminder: this.state.reminder
        }
        this.props.onAdd(obj)
        this.stateInit()

    }



    stateInit = () =>{
        this.setState(() => ({
            text:'',
            day:'',
            reminder:false
        }))
    }

    render() {

        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" placeholder="add task" value={this.state.text} onChange={(event) =>
                        this.setState({text: event.target.value})}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="task">Time</label>
                    <input type="date" value={this.state.day} onChange={(event) =>
                        this.setState({day: event.target.value})}/>
                </div>
                <div className='form-control form-control-check'>
                    <label htmlFor="task">Set Reminder</label>
                    <input type="checkbox" value={this.state.reminder} onChange={(event) =>
                        this.setState({reminder: event.currentTarget.checked})} checked={this.state.reminder}/>
                </div>

                <input type="submit" value='Save Task' className='btn btn-block'/>


            </form>
        );
    }

}

export default AddTask;