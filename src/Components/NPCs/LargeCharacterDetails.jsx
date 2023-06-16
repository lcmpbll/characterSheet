import React from 'react';
import Loading from '../loading';
import { Box } from '@mui/material';
import { ItemList } from '../Skills/SkillList';

const LargeCharacterDetails = ({npc}) => {
  console.log(npc,'ln 6')
  if (!npc){
    return <Loading/>
  }
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', flex: 8}}>
      <Box sx={{flex: 2}}>
        <CharacterHeader name={npc.name} type={npc.type} sub_type={npc.sub_type}/>
      </Box>
      <Box sx={{flex: 6, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', flex: 8}}>
          <Box sx={{display: 'flex', flexDirection: 'column', flex: 2}}>
            <ItemList skillsList={npc.ability_score} />
          </Box>
          <Box sx={{display: 'flex', flex: 3, background: '	#C0C0C0', padding: '5px', borderRadius: '3%', flexDirection: 'column'}}>
            <SmallStatsBoxes speed={npc.speed} ac={npc.ac} initiative={npc.ability_score[2].plus}/>
            <Box sx={{display: 'flex', flexDirection: 'column', flex: 2}}>
              <Box sx={{display: 'flex', flexDirection: 'row', border: '2px solid grey', height: '100px', width: '300px', justifyContent: 'space-evenly', padding: '3px'}}>
                <Box>
                  <p sx={{margin: '0px'}}>Max HP: </p>
                  <p>{npc.hp}</p>
                </Box>
                <Box>
                  <p sx={{margin: '0px'}}>Current HP:</p>
                  <h3 sx={{margin: '0px'}}>{npc.hp}</h3>
                </Box>
              </Box>
              <Box sx={{display: 'flex', flex: 2, flexDirection: 'row', border: '2px solid grey', height: '100px', width: '300px', justifyContent: 'space-evenly', padding: '3px'}}>
                <Box sx={{border: '2px double grey', display: 'flex', flexDirection: 'column', flex: 1}}>
                  <p>Total Hit Die: 7 D8</p>
                  <p>Current Hit Die: 7</p>
                </Box>
                <Box sx={{border: '2px double grey', display: 'flex', flexDirection: 'column', flex: 1}}>
                  <p>Success () () ()</p>
                  <p>Failures () () ()</p>
                  <p>Death Saves</p>
                </Box>
              </Box>
              <Box>
                <p> now</p>
              </Box>
            </Box>
            
          </Box>
          <Box sx={{display: 'flex', flex: 3, background: '	#C0C0C0', padding: '2px', borderRadius: '20%'}}>
            <SmallStatsBoxes speed={npc.speed} ac={npc.ac} initiative={npc.ability_score[2].plus}/>
            <Box sx={{display: 'flex', flexDirection: 'column', flex: 2}}>
              <Box></Box>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LargeCharacterDetails


const SmallStatsBoxes = (props) => {
  const {speed, ac, initiative} = props;
  return (
    <Box sx={{display: 'flex', border: '3px double grey'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', border: '1px solid black'}}>
        <h4>{ac}</h4>
        <p>Armor Class</p>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', border: '1px solid black'}}>
        <h4>{initiative > 0 ? '' : '-'}{initiative}</h4>
        <p>Initiative</p>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', border: '1px solid black'}}>
        <h4>{speed}</h4>
        <p>Speed</p>
      </Box>
    </Box>
  )
}

const CharacterHeader = (props) => {
  const {name, type, sub_type} = props;
  return (
    <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between',flex: 5, border: '3px solid black', width: '100%', padding: '1rem'}}>
      <Box sx={{display: 'flex', flex: 2, flexDirection: 'column', border: '4px solid grey'}}>
        <h1>{name}</h1>
        <h4>Character Name</h4>
      </Box>
      <Box sx={{flex: 3}}>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '1rem'}}>
         <h3>Type: </h3><p> {type}</p>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '1rem'}}>
          <h3>Sub Type: </h3>
          <p> {sub_type}</p>
        </Box>
      </Box>
    </Box>
  )
  
}