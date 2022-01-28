import {
  Box,
  styled,
  Typography,
} from '@mui/material';

export const Container = styled(Box)(()=>({

}));

export const Title = styled(Typography)(({theme:{palette}})=>({
    margin: 0,
    lineHeight: 1.15,
    fontSize: "4rem",
    color: palette.secondary.main,
    textAlign: "center",
    fontWeight: 500
}));