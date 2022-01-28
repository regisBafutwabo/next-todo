import Head from 'next/head';

import { HeadTitleProps } from './HeadTitle.interface';

export const HeadTitle = (props: HeadTitleProps) => {
    const {title} = props;

    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};