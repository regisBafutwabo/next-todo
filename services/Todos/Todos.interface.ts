 export type CreateTodoParams = {

 }

export interface TodoInterface {
    createTodo(params: CreateTodoParams):void;
    updateTodo():void;
    deleteTodo():void;
}
