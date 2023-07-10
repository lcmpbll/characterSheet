import Loading from './Components/loading';
import { Box } from '@mui/material';

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
