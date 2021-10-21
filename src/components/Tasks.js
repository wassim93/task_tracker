import React from 'react';

const Tasks = ({tasks}) => {

    return (
        <div>
            {tasks.map((task) => (<p key={task.id}>{task.text}</p>))}
        </div>
    );
}

export default Tasks;
