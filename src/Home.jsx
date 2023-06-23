import Loading from './Components/loading';
import {Box} from '@mui/material';
import { ProficienciesList } from './Components/Skills/Proficiencies';

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
    
      </Box>
    </Box>
  );
};

export default Home;
