import React from 'react';
import { Button } from 'react-bootstrap'

function TodoListDetail({ history,match}) {
    console.log("TodoListDetail -> match", match)
    console.log("TodoListDetail -> history", history)
    const todolistDescription = history.location.state.description
    return (
        <div>
            Detail {`${match.params.id}`}: {todolistDescription}
            <Button
                variant="primary btnShow ml-2"
                onClick={() => history.push(`/todolist`)}
            > Back
            </Button>
        </div>
    );
}

export default TodoListDetail;