import { HeadTitle } from 'components/_common';
import { StandardLayout } from 'components/layout';
import { Main } from 'components/templates';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
    <HeadTitle title="Home - Todo"/>
    <StandardLayout>
      <Main/>
    </StandardLayout>
    </>
  )
}

export default Home
