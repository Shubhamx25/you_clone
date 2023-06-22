import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail} from "./components";

const App = () => (
    <BrowserRouter>
     <Box sx={{backgroundColor: '#0f0f0f'}}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element = { <Feed/> }/>
            <Route path="/video/:id" element = { <VideoDetail /> }/>
            <Route path="/channel/:id" element = { <ChannelDetail /> }/>
            <Route path="/search/:searchTerm" element = { <SearchFeed /> }/>
        </Routes>
    </Box>
    </BrowserRouter>   
  );


export default App