import { Box } from "@mui/system";
import {styled} from "@mui/material/styles";
import mypic from "../assets/mypic.png"
import { Paper } from "@mui/material";
export const HeroStyleSection = styled(Box)(() => ({
    display:"flex",
    flexDirection:"column",
    height:"85vh",
    alignItems:"flex-start",
    justifyContent:"center",
    
   

}));
export const HeroStyleSectionMobile = styled(Box)(() => ({
    display:"flex",
    flexDirection:"column",
    height:"65vh",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5
   

}));

export const HeroImgSection=styled(Paper)(()=>({
    
    width: "250px",
    height: "300px",
    backgroundImage: 'url('+mypic+')',
    backgroundSize: "100% 100%", 
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin: 4,
    padding: 2,
    border: "10px solid black",
    borderWidth:"0px 15px 15px 0px",
    borderColor:"rgba(112, 141, 157, 0.7)",
    borderRadius: "0px 90px 0 90px"
    
}))

export const HeroImgSectionMobile=styled(Paper)(()=>({
    
    width: "200px",
    height: "250px",
    backgroundImage: 'url('+mypic+')',
    backgroundSize: "100% 100%", 
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin: 5,
    padding: 2,
    border: "10px solid black",
    borderWidth:"0px 15px 15px 0px",
    borderColor:"rgba(112, 141, 157, 0.7)",
    borderRadius: "0px 90px 0 90px"
    
}))


