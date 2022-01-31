import {
  Box,
  styled,
} from '@mui/material';

export const Container = styled(Box)(()=>({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection: "column"
}));