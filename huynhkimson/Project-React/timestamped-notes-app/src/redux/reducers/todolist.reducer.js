import {
    CREATE_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
} from '../constants/index';
import moment from 'moment';

const initialState = {
    todoListData: [
        {
            id: 1, 
            title: "ReactJS",
            description:"React là một thư viện JavaScript mã nguồn mở, giao diện người dùng để xây dựng giao diện người dùng hoặc các thành phần UI. Nó được duy trì bởi Facebook và một cộng đồng các nhà phát triển và công ty cá nhân. React có thể được sử dụng như một cơ sở để phát triển các ứng dụng trang đơn hoặc di động.",
            recorded: moment().format('LLLL')
        },
        {
            id: 2, 
            title: "Html",
            description:"Hypertext Markup Language",
            recorded: moment().format('LLLL'),
        },
    ],
};

function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TASK_SUCCESS: {
            return {
                ...state,
                todoListData: [
                    ...state.todoListData,
                    action.payload,
                ],
            }
        }
        case DELETE_TASK_SUCCESS: {
            const { id } = action.payload;
            const newTodoListData = state.todoListData;
            const taskIndex = state.todoListData.findIndex((item) => item.id === id);
            newTodoListData.splice(taskIndex, 1)
            return {
                ...state,
                todoListData: [
                    ...newTodoListData,
                ],
            }
        }
        default: {
            return state;
        }
    }
}

export default todoListReducer;