import React, { useMemo, memo, useState, useEffect} from 'react';
import Loading from '../loading';
import { Box } from '@mui/material';
import { SmallClickableDetailItem } from '../Lists/SmallDetailItem';
import { withData } from '../../HOC/withFormData';
import { SplitScreen } from '../Divisions/SplitScreen';
import { ApiList } from '../Lists';
import { FaHeadSideVirus } from 'react-icons/fa';
import { GiJuggler } from 'react-icons/gi';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { RiNotificationOffLine } from 'react-icons/ri';


const Modal = ({children , shouldShow, handleCloseClick}) => {
  
  return (
    <>
    {shouldShow && (
      <Box sx={{border: '2px solid black', position: 'fixed', zIndex: '1', left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0, 0.5)'}}
        onClick={() => handleCloseClick()}>
        <Box  onClick={e => e.stopPropagation()}>
          {children}
        </Box>
      </Box>
    )}
    </>
  );
}

const SmallInfoItem = ({data}) => {
  return data ? (
    <>
    
    </>
  ): <Loading/> ;
}

const Spells = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [moreInfoUrl, setMoreInfoUrl] = useState(''); 
  const [url, setUrl] = useState('/api/spells');
  const [detaillUrl, setDetailUrl] = useState('');
  const SpellDetailsWithData = useMemo(() => withData(SpellDetails, detaillUrl));
  const SpellListWithData = useMemo(() => withData(ApiList, url));
  const handleItemClick = (url) => {
    setDetailUrl(url);
  };
  const handleDetailClick = (moreInfoUrl, shouldShow) => {
    setMoreInfoUrl(moreInfoUrl);
    setShouldShow(shouldShow);
  }; 
  const handleCloseClick = (shouldShow) => {
    setShouldShow(false);
  };
  const MemorizedSpellList = useMemo(
    () => memo(() => 

      <SpellListWithData resourceName={'Item'} itemComponent={SmallClickableDetailItem}  handleItemClick={handleItemClick}   />

    ),
    [url]
  )
  return (
    <>
      <SplitScreen
      leftWeight={1}
      rightWeight={4}
      >
        <button onClick={() => handleDetailClick('dada', true)}>Click here</button>
        <MemorizedSpellList />
        <SpellDetailsWithData/>
      </SplitScreen>
      <Modal shouldShow={shouldShow} handleCloseClick={handleCloseClick}>
        <SmallInfoItem />
      </Modal>
    </>
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
    classes,
    subclasses,
    url,
    desc
  } = data || {};
  console.log(data);
  
  return data ? (
    <Box sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', margin: '1rem'}}>
      <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline'}}>
        <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'baseline', flexDirection: 'column'}}>
          <h1>{name}</h1>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'baseline', flexDirection: 'column', height: '150px', flexWrap: 'wrap'}}>
          {classes.map((spellClass, index) => {
            return (
              <p key={index}>{spellClass.name} &nbsp;</p> 
            )
          })}
        </Box>
        <Box sx={{display: 'flex', width: '100%', alignItems: 'flex-end', flexDirection: 'column'}}>
          <p>School: {school.name}</p>
          <p>Level: {level}</p>
          
          <p>{damage?.damage_at_character_level ? 'Damage at charater level 1: ' + damage?.damage_at_character_level[1] : 'Damage at slot level '+ level + ': ' + damage?.damage_at_slot_level[level]}</p>
        </Box>
      </Box>
      <Box sx={{}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', border: '2px solid black', padding: '1rem', width: '100%'}}>
          <p>Range: {range}</p>
          <p>Casting Time: {casting_time}</p>
          <p>Duration: {duration}</p>
          <p>Concentration: {concentration ? <FaHeadSideVirus/> : <GiJuggler/> }</p>
          <p>Ritual: {ritual ? <MdOutlineCheckCircleOutline/> : <RiNotificationOffLine/> }</p>
        </Box>
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
      {higher_level.length > 0 ? 
      <Box>
        <h5>At Higher Level</h5>
          {higher_level?.map((description, index) => {
            return (
              <Box>
                <p>{description}</p>
                </Box>
            )
          })}
      
      </Box> : null }
    </Box>
  ) : <h1> Select a Spell</h1>;
  
}


