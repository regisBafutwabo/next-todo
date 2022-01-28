import {
  CreateTodoParams,
  TodoInterface,
} from './Todos.interface';

export class TodoService implements TodoInterface {
    createTodo(params: CreateTodoParams){
        console.log("createTodo service")
    } 
    updateTodo(){
        console.log("updateTodo service")
    } 

    deleteTodo(){
        console.log("deleteTodo service")
    } 
}