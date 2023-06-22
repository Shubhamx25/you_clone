import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      if(searchTerm){
         navigate(`/search/${searchTerm}`);
         setSearchTerm('');
      }
  }
  return (
    <Paper
     component='form'
     onSubmit={handleSubmit}
     sx={{
        borderRadius: 20,
        border: '1px solid #4d4d4d',
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5},
        backgroundColor:'#0f0f0f'
     }}
    >
        <input className="search-bar"
         placeholder="Search ..." 
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)} 
         style={{backgroundColor:'#0f0f0f',color:'#fff'}}
        />
        <IconButton type="submit" sx={{
            p: '10px',
            color: "gray"
         }}>
            <SearchIcon  />
        </IconButton>
    </Paper>
  )
}

export default SearchBar;