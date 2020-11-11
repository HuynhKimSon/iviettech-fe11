import React from 'react';

function DetailTask({ history}) {
    const TaskDescription = history.location.state.description
    return (
        <div>
            Detail : {TaskDescription}
        </div>
    );
}

export default DetailTask;

