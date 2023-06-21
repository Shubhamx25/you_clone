import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed  = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos ] = useState([]);
  
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm]);

  return (
    <Box >
        <Box p={2} sx={{overflowY: 'auto', height:'90vh'}}>
              <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
                Search results for:&nbsp;<span style={{color: 'white'}}>{searchTerm}</span> videos
              </Typography>

              <Videos videos={videos} />
        </Box>
    </Box>
    
  )
}


export default SearchFeed