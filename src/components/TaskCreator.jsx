import { useState } from "react";


// eslint-disable-next-line react/prop-types
export const TaskCreator = ({ createTask }) => {

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !task ) return;

        createTask( task );
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit} className="my-4 row">
            <div className="col-9">
                <input
                    type="text"
                    placeholder='Enter a new task'
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="form-control"
                />
            </div>

            <div className="col-3">
                <button className="btn btn-primary" type='submit'>Save</button>
            </div>
        </form>
    )
}
