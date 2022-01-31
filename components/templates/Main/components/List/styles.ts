import {
  Box,
  Button,
  List,
  styled,
} from '@mui/material';

export const Container = styled(List)(()=>({
    
}));

export const ButtonContainer = styled(Box)(()=>({
    display: "flex",
    justifyContent:"center",
}));

export const LoadMoreButton = styled(Button)(({theme:{palette}})=>({
    backgroundColor: palette.secondary.main,
    color: palette.background.default,
    textTransform:"capitalize",
    
    ":hover":{
        border: `1px solid ${palette.secondary.main}`,
        color: palette.secondary.main
    }
}));