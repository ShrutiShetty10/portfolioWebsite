import { createTheme } from "@mui/material";
export const Colors={
    primary:'#000000',
    secondary:"#AD675E",
    backGrey:"#708D9D",
    darkGrey:"#3B444B"
    
    
}
const theme=createTheme({
    palette:{
        primary:{
            main:Colors.primary
        },
        secondary:{
            main:Colors.secondary
        },
        
        
    }
})
export default theme;