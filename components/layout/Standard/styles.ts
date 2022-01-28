import { styled } from '@mui/material';

export const Footer = styled("footer")(({theme:{palette,spacing}}) => ({
    display: "flex",
    flex:1,
    padding: spacing(2,4),
    borderTop: `1px solid ${palette.grey[200]}`,
    justifyContent: "center",
    alignItems: "center",
    
}));

export const VercelLink = styled("a")(()=>({
    display: "flex",
}));

export const MainContainer = styled('main')(({theme:{spacing}})=>({
    minHeight: "100vh",
    padding: spacing(8, 4),
    flex:1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center"
}));

export const Logo = styled("span")(()=>({
    display: "flex"
}));