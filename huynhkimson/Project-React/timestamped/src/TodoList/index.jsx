import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap'
import ModifyListInput from '../TodoList/ModifyListInput/index';
import history from '../util/history'
import './style.css';

function TodoList() {
    const [todoListData, setTodoListData] = useState([
        {
            id: 1,
            title: 'Mời bạn thêm nội dung cần nhập 1',
            description: 'Mô tả nội dung 1',
        },
    ]);

    const handleSubmitForm = (values) => {
        console.log("handleSubmitForm -> values", values)
        setTodoListData([
            {
                id: values.id,
                title: values.title,
                description: values.description,
            },
            ...todoListData,
        ]);
    }

    // Remove TodoList
    const handleDeleteTodoList = (idDeleted) => {
        console.log("handleDeleteTodoList -> idDeleted", idDeleted)
        const newTodoListData = todoListData;
        const taskIndex = todoListData.findIndex((item) => item.id === idDeleted);
        newTodoListData.splice(taskIndex, 1);
        setTodoListData([
            ...newTodoListData,
        ]);
    };

    const renderItemList = () => {
        return todoListData.map((item, itemIndex) => {
            return (
                <ListGroup.Item
                    key={`sanpham-${item.id}-${itemIndex}`}>
                    <div className="todo-item-container">
                        <p>{item.title}</p>
                        <div className="todo-item-action">
                            <Button
                                variant="success btnShow"
                                onClick={() => history.push({
                                    pathname: `/todolist/${item.id}`,
                                    state: {
                                        title: item.title,
                                        description: item.description
                                    }
                                })}
                            >Show Details
                            </Button>
                            <Button
                                variant="danger btnDelete ml-3"
                                onClick={() => {
                                    if (todoListData.length === 1) {
                                        return null;
                                    }
                                    else {
                                        handleDeleteTodoList(item.id)
                                    }
                                }}
                            >
                                Remove Note</Button>
                        </div>
                    </div>
                </ListGroup.Item>

            );
        })
    }

    return (
        <>
            <div className="todo-list-container">
                <div className="todo-list-content">
                    <h4>Timestanmped Notes App</h4>
                    <div className="todo-list-title">
                        <ModifyListInput
                            handleSubmitForm={handleSubmitForm}
                        />
                    </div>
                    <div className="mt-2">
                        <ListGroup>
                            {renderItemList()}
                        </ListGroup>
                    </div>
                </div>
            </div >
        </>
    );
}

export default TodoList;