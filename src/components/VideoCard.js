import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {  demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({ video: { id : {videoId}, snippet} }) => {
   
  return (
     <Card sx={{
        width: {xs: '100vw',sm:'45vw', md:'min(360px, 24vw)'},
        boxShadow: 'none',
        flexGrow: 1,
        backgroundColor: '#0f0f0f'
     }}>
       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
         <CardMedia
          image={snippet?.thumbnails?.high?.url}  alt={snippet?.title}
          sx={{ width: '100%' , height: 180, borderRadius: {sm:'0',md:'12px'} }}
        /> 
       </Link>
       <CardContent sx={{ height: '80px'}}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color='#fff'>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
         </Link> 

         <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" color='#fff'>
                {snippet?.channelTitle || demoChannelTitle }
                <CheckCircle sx={{fontSize:12, color: 'gray', ml: '5px'}} />
            </Typography>
         </Link>
       </CardContent>
     </Card>
  )
}

export default VideoCard