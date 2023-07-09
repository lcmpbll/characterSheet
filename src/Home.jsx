import Loading from './Components/loading';
import { Box } from '@mui/material';
import Items from '../src/Components/Items';
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
      <Items/>
      </Box>
    </Box>
  );
};

export default Home;
