import { Stack } from "@mui/material"
import { categories } from "../utils/constants";



const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack 
     direction='row'
     sx={{
        overflow: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
     }}
    > 
        {categories.map((category) => (
            <button className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    
                    style={{
                        background: category.name === selectedCategory && ' #282928',
                        color: 'white',
                        marginBlock: '3px',
                        whiteSpace:'nowrap'
                        
                    }}
            >
                <span style={{
                        color: 'white',
                         marginRight: '0.8rem'
                    }}>
                        {category.icon}
                </span>
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.8',
                     transform: 'scale(1, 1.15)'
                }}>
                    {category.name}
                </span>
            </button>
        ) )}
    </Stack>
  )


export default Sidebar;