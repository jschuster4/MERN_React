import React, { useState } from  'react';


const TdList = props => {
    const [Name, setName] = useState("");
    const [isComplete, setIsComplete] = useState(false);


    const onSubmitHandler = e => {
        e.preventDefault();
        const task = {Name, isComplete};
        props.newTask(task);
        setName("");
    }

    return(
        <div>
            <h3>Submit a new task</h3>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <label htmlFor="Name">Task Name</label>
                    <input type="text" name="Name" onChange={(e) => setName(e.target.value)} value={Name}/>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
}
export default TdList;


