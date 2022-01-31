import {
  UpdateTodoMutationVariables,
} from '../../config/relay/__generated__/UpdateTodoMutation.graphql';

export type CreateTodoParams = {

 }

 export type UpdateTodoParams = {
     variables: UpdateTodoMutationVariables;
     onCompleted?: () => void;
     onError?:(error: Error) => void;
 }
export interface TodoInterface {
    createTodo(params: CreateTodoParams):void;
    updateTodo(params: UpdateTodoParams):void;
    deleteTodo():void;
}
