import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
 
  return (
    <Stack direction={ direction || 'row' } flexWrap='wrap' justifyContent='center' gap={2} className="video-box" width='100%'>
    

      {videos.map((item, idx) => (
        <Box key={idx} /* sx={{width:'32%'}} */>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;