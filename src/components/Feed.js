import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos ] = useState([]);
  
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory]);

  return (
     <Stack sx={{
        flexDirection: {sx: 'column', md: 'row'}
     }}>
        <Box sx={{ 
            height: {sx: 'auto', md: '92vh'},
            borderRight: '1px solid #3d3d3d',
            px:{ sx: 0, md: 2},
            flex: 1
        }} >
            <Sidebar selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
            />
            <Typography className="copyright" variant="body2" sx={{
              mt: 2,
              color: '#fff',
              display: {sx: 'none',sm:'none', md: 'flex'}
            }}> 
              Copyright &copy;2023
            </Typography>
        </Box>
        
        
          <Box sx={{
                          overflowY: 'auto',
                          height:'90vh',
                          flex: 6.5,
                          ml: {sm: '0', md:'20px', lg: '30px'},
                          p: {xs: '0',sm: '8px', md:'16px'}             
                          }}>
            
            <Typography variant="h5" fontWeight='500' mb={{sx:'6px',md:'16px'}} sx={{color:'white', transform: 'scale(1, 1.15)',alignSelf:'flex-start'}}>
                    {selectedCategory}<span style={{color: 'white'}}>&nbsp;videos</span>
            </Typography> 

            <Videos videos={videos} selectedCategory={selectedCategory} />
          </Box>
        


     </Stack>
  )
}

export default Feed