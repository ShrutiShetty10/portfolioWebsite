import { Box } from "@mui/system";
import {styled} from "@mui/material/styles";
import {Link, Typography} from "@mui/material";
import { Colors } from "../index";
import '@fontsource/lora';
import { List} from "@mui/material";

//container
export const NavbarContainer=styled(Box)(()=>({
    display:'flex',
    marginTop:4,
    padding:'2px 4px',
    
}));


//List items
export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 2,
    flexBasis:"25%",
    justifyContent:"space-around",
    alignItems:"flex-end",
    flexWrap:"wrap" ,
    marginLeft:"200px"
    
}));
export const NavbarListItem = styled(Typography)(() => ({
    
    
    flexGrow:1,
    fontFamily:'Lora',
    fontSize:'18px',
    color:'white',
    fontWeight:"500",
    textAlign:"right",
    
    
}));
export const LinkItem = styled(Link)(() => ({
    position: 'relative',
    '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-3px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: `${Colors.secondary}`,
        visibility: 'hidden',
        transformOrigin: "bottom left",
        transition: 'all 0.3s ease-out',
      },
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
        transformOrigin: "bottom right",
      },
}));