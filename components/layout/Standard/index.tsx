import { VERCEL_LINK } from '_constants';
import Image from 'next/image';

import {
  Footer,
  Logo,
  MainContainer,
  VercelLink,
} from './styles';

export const StandardLayout = ({children}:any) => {
    return (
        <>
            <MainContainer>
            {children}
            </MainContainer>
            <Footer>
                <VercelLink
                    href={VERCEL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{''}
                <Logo>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </Logo>
                </VercelLink>
            </Footer>
        </>
    );
};