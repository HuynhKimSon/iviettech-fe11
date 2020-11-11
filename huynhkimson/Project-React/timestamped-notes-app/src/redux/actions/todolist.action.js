import {
    CREATE_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
} from '../constants/index';

export function createTask(params) {
    return {
        type: CREATE_TASK_SUCCESS,
        payload: params,
    }
}
export function deleteTask(params) {
    return {
        type: DELETE_TASK_SUCCESS,
        payload: params,
    }
}