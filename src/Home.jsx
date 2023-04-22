import Loading from './Components/loading';
import {Box} from '@mui/material';

import { ItemList } from './Components/Skills/SkillList'
const Home = () => {
  
  return (
    <Box sx={{
      padding: '10px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
    }}>

      <Box>
      <Loading/>
      <ItemList/>
      
      </Box>
    </Box>
  );
};

export default Home;
