import React, { useState } from  'react';


const TdResults = props => {


    return(
        <div>
            <h3>Your Tasks:</h3>
            <table className='table table-striped'>
                <tr>
                    <th>Task</th>
                    <th>Completed?</th>
                </tr>
                {
                    props.AllTasks.map((task, i) => {
                        return <tr>
                            {
                                task.isComplete ? <td style={{textDecoration: 'line-through'}}>{task.Name}</td> : <td>{task.Name}</td>
                            }
                            <td>
                                <input type="checkbox" name="isComplete" onChange={() => props.toggleCheck(i)} checked={task.isComplete}/>
                            </td>
                            <td>
                                <button onClick={() => props.delete(i)}>Delete this task</button>
                            </td>
                        </tr>
                    })
                }

            </table>
        </div>
    );
}
export default TdResults; 