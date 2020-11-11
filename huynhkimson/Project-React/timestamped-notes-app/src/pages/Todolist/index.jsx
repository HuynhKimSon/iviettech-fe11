import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import moment from 'moment';
import history from '../../util/history';

import {
    createTask,
    deleteTask
} from '../../redux/actions/index'
import './styles.css'
function TodoList({
    createTask,
    deleteTask,
    todoListData,
}) {
    const [todolistForm] = Form.useForm();

    // Add task
    const handleSubmitTodoList = values => {
        todolistForm.resetFields();
        createTask({
            id: Math.floor(Math.random() * 100),
            title: values.title,
            description: values.description,
            recorded: moment().format('LLLL'),
        });
    }
    // Delete task
    const handleDeleteTodoList = (deletedId) => {
        deleteTask({
            id: deletedId,
        });
    };

    const onFinish = values => {
        handleSubmitTodoList(values);
    };
    // Render Todo List

    const renderTodolist = () => {
        return todoListData.map((item, itemIndex) => {
            return (
                <div
                    className="item-task"
                    key={itemIndex}
                >
                    <div className="item-title">
                        <p style={{ fontWeight: 500 }}>{item.title}</p>
                        <div style={{ marginRight: 10 }}>
                            <p style={{ marginTop: 5, marginBottom: 5, fontSize: 12 }}>Recorded: {item.recorded}</p>
                            <div>
                                <Button
                                    className="btn-show"
                                    type="primary"
                                    onClick={() => history.push({
                                        pathname: `/detail/${item.id}`,
                                        state: {
                                            title: item.title,
                                            description: item.description
                                        }
                                    })}
                                >
                                    Show
                            </Button>
                                <Button
                                    className="btn-delete"
                                    type="primary"
                                    onClick={() => { handleDeleteTodoList(item.id) }}
                                >
                                    Delete
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <Row span={24} className="PageTodoList">
                <Row span={24} className="TodoList">
                    <Col
                        span={24}
                        className="form-context"
                    >
                        <h1 style={{ color: '#fdc66e' }}>Timestamped Notes App</h1>
                    </Col>
                    <Col
                        span={24}
                        className="form-todolist"
                    >
                        <Form
                            form={todolistForm}
                            name="ToDoList"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                className="title"
                                name="title"
                                rules={[{ required: true, message: 'Please input your title', }]}
                            >
                                <Input placeholder="Note Title" style={{ width: '100%', height: 25, paddingLeft: 5, fontSize: 14 }} />
                            </Form.Item>

                            <Form.Item
                                className="description"
                                name="description"
                                rules={[{ required: true, message: 'Please input your description', }]}
                            >
                                <Input.TextArea placeholder="Note Details" rows={4} style={{ width: '100%', marginTop: 10, paddingLeft: 5, fontSize: 15 }} />
                            </Form.Item>

                            <Form.Item
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Button
                                    className="btn-submit"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Add Note
                            </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row span={24} className="show-task">
                    <Col span={24}>
                        {renderTodolist()}
                    </Col>
                </Row>
            </Row>
        </>
    );
}

// store ( state tổng )
const mapStateToProps = (state) => {
    const { todoListData } = state.todoListReducer;
    return {
        todoListData,
    }
};

// dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (params) => dispatch(createTask(params)),
        deleteTask: (params) => dispatch(deleteTask(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);