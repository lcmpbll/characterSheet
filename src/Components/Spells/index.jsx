import React, { useMemo, memo, useState, useEffect, createContext, useContext } from 'react';
import { Box } from '@mui/material';
import { SmallClickableDetailItem } from '../Lists/SmallDetailItem';
import { withData } from '../../HOC/withFormData';
import { SplitScreen } from '../Divisions/SplitScreen';
import { ApiList } from '../Lists';

export const SpellContext = createContext();
const Spells = () => {
  const [url, setUrl] = useState('/api/spells');
  const [detaillUrl, setDetailUrl] = useState('');
  const SpellDetailsWithData = useMemo(() => withData(SpellDetails, detaillUrl));
  const SpellListWithData = useMemo(() => withData(ApiList, url));
  const handleItemClick = (url) => {
    setDetailUrl(url);
  }
  const MemorizedSpellList = useMemo(
    () => memo(() => 

      <SpellListWithData resourceName={'Item'} itemComponent={SmallClickableDetailItem}  handleItemClick={handleItemClick}   />

    ),
    []
  )
  return (
    
    <SplitScreen
    leftWeight={1}
    rightWeight={5}
    >
      <MemorizedSpellList />
      <SpellDetailsWithData/>
    </SplitScreen>
  )
}

export default Spells;

const SpellDetails = ({data}) => {
  const {
    name,
    casting_time,
    components,
    concentration,
    damage,
    dc,
    duration,
    higher_level,
    level,
    ritual,
    range,
    school,
    subclasses,
    url,
    desc
  } = data || {};
  console.log(data);
  
  return data ? (
    <Box sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline'}}>
        <h1>{name}</h1>
      </Box>
      <Box>
        {desc.map((description, index) => {
          return ( 
            <Box>
              <p key={index}>{description}</p>
            </Box> 
          )
        })}
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', border: '2px solid black', padding: '3px'}}>
        <p>Range: {range}</p>
        <p>Casting Time: {casting_time}</p>
        <p>Duration: {duration}</p>
        <p>Concentration: {concentration ? "yes" : "nah"}</p>
        <p>Ritual: {ritual ? "yes" : "nah"}</p>
      </Box>
    </Box>
  ) : <h1> Select a Spell</h1>;
  
}