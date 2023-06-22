import { Stack, Typography,useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const isNonMobileScreen = useMediaQuery('(min-width:900px)');
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{position: "sticky",
           background: "#0f0f0f", top: 0, justifyContent: 'space-between',
           zIndex:'1000'}}>
        <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="logo" height={50} />
            {isNonMobileScreen &&  <Typography color='#fff' fontWeight='600' sx={{
              transform:'scale(1,1.5)',
              mr:'5px'
            }}>PREMIUM</Typography>}
           
        </Link> 
        <SearchBar />
    </Stack>
  )
}

export default Navbar;