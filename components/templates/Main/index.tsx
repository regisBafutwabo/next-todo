import {
  TodosListQuery,
} from 'config/relay/__generated__/TodosListQuery.graphql';
import { usePreloadedQuery } from 'react-relay';

import { List } from './components';
import { TodosList } from './graphql/queries/TodosList.query';
import { MainProps } from './Main.interface';
import {
  Container,
  Title,
} from './styles';

export const Main = (props: MainProps) => {
    const {todoListQueryRef} = props;
    const data = usePreloadedQuery<TodosListQuery>(TodosList, todoListQueryRef);
    
    return (
        <Container>
            <Title variant="h1">Welcome to Todos!</Title>
            <List node={data}/>
        </Container>
    );
};