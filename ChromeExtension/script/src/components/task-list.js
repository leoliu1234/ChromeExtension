import React from 'react';

export default class TaskList extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Task List</legend>
                <ul>
                    <li>Reload page</li>
                    <li>Click Page</li>
                </ul>
            </fieldset>
        );
    }
}