import React from 'react';

export default class AddTask extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Add Task</legend>
                <form role="form">
                    <div>
                        <div for="task-name">Task Name</div>
                        <input type="text" id="task-name" placeholder="Task Name" />
                    </div>
                    <div>
                        <div for="input-interval">Interval</div>
                        <input type="text" id="input-interval" placeholder="Interval" />
                    </div>
                    <a href="#" className="button">Add Item</a>
                    <div>
                        <div for="page-url">Page Url</div>
                        <input type="text" id="page-url" placeholder="Page Url" />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" /> Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </fieldset>
        );
    }
}