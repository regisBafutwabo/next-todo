import {
  Suspense,
  useEffect,
} from 'react';

import { HeadTitle } from 'components/_common';
import { StandardLayout } from 'components/layout';
import { Main } from 'components/templates';
import {
  TodosList,
} from 'components/templates/Main/graphql/queries/TodosList.query';
import {
  TodosListQuery,
} from 'config/relay/__generated__/TodosListQuery.graphql';
import type { NextPage } from 'next';
import { useQueryLoader } from 'react-relay';

import { CircularProgress } from '@mui/material';

const Home: NextPage = () => {
  const [todoListQueryRef, todoListLoadQuery] = useQueryLoader<TodosListQuery>(TodosList);

  useEffect(()=>{
    todoListLoadQuery({
      first:5, 
      where:{deleted_at:{_is_null:true}}, 
      order_by: [{ created_at: "desc" }] 
    })
  },[todoListLoadQuery]);

  return (
    <>
    <HeadTitle title="Home - Todo"/>
    <StandardLayout>
      {todoListQueryRef ? 
        <Suspense fallback={<CircularProgress/>}>
          <Main todoListQueryRef={todoListQueryRef}/>
        </Suspense>
         : 
        <CircularProgress/>}
    </StandardLayout>
    </>
  )
}

export default Home;