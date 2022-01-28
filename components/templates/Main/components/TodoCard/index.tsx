import { TodoCard$key } from 'config/relay/__generated__/TodoCard.graphql';
import { useFragment } from 'react-relay';

import {
  Checkbox,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import { TodoCardFragment } from '../../graphql/fragment/TodoCard.fragment';
import { Container } from './styles';
import { TodoCardProps } from './TodoCard.interface';

export const TodoCard = ({item}: TodoCardProps) => {
    const todo = useFragment<TodoCard$key>(TodoCardFragment, item);

    const handleToggle=()=>{

    }

    return (
        <Container 
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle}
                    checked={todo.completed}
                    // inputProps={{ 'aria-labelledby': labelId }}
                />
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemText primary={todo.title} />
            </ListItemButton>
        </Container>
    );
};