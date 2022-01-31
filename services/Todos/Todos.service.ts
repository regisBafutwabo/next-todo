import {
  UpdateTodo,
} from 'components/templates/Main/graphql/mutations/UpdateTodo';
import RelayEnvironment from 'config/relay/environment';
import { commitMutation } from 'relay-runtime';

import {
  CreateTodoParams,
  UpdateTodoParams,
} from './Todos.interface';

export class TodoService {
    static createTodo(params: CreateTodoParams){
        console.log("createTodo service")
    }

    static updateTodo({variables, onCompleted, onError}: UpdateTodoParams){
        console.log("updateTodo service")

        return commitMutation(RelayEnvironment, {
            mutation: UpdateTodo,
            variables:variables ,
            onCompleted,
            onError,
        })
    } 

    static deleteTodo(){
        console.log("deleteTodo service")
    } 
}