import { ReactNode } from "react";

import { VERCEL_LINK } from "_constants";
import Image from "next/image";

import {
  Box,
  useTheme,
} from "@mui/material";

import {
  Footer,
  Logo,
  MainContainer,
  VercelLink,
} from "./styles";

export const StandardLayout = (props: { children: ReactNode }) => {
  const { palette } = useTheme();
  const { children } = props;

  return (
    <Box sx={{ backgroundColor: palette.background.default }}>
      <MainContainer>{children}</MainContainer>
      <Footer>
        <VercelLink
          href={VERCEL_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Powered by `}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </VercelLink>
      </Footer>
    </Box>
  );
};
