import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material";

import { Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed  = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos ] = useState([]);
  
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory]);

  return (
    <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex: 2}}>
    <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
      {selectedCategory}<span style={{color: 'white'}}> videos</span>
    </Typography>

    <Videos videos={videos} />
  </Box>
  )
}


export default SearchFeed