import React from 'react';
import Loading from '../loading';
import { Box } from '@mui/material';
import { ItemList } from '../Skills/SkillList';
import { ProficienciesList } from '../Skills/Proficiencies';
import { SavingThrows } from '../Skills/Proficiencies';

const LargeCharacterDetails = ({npc}) => {
  console.log(npc,'ln 6')
  if (!npc){
    return <Loading/>
  }
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', flex: 6, border: '3px solid black', padding: '1rem', maxWidth: '800px', maxHeight: '1150px'}}>
      <Box sx={{flex: 2}}>
        <CharacterHeader name={npc.name} type={npc.type} sub_type={npc.sub_type} desc={npc.desc}/>
      </Box>
      <Box sx={{flex: 6, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', flex: 8}}>
          <Box sx={{display: 'flex', flexDirection: 'row', flex: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <ItemList skillsList={npc.ability_score} />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'hidden', height: 'content'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid black'}}>
                <Box sx={{ border: '3px solid grey', borderRadius: '50%', display: 'flex', justifyContent: 'center', width: '30%', height: '60%', alignItems: 'center'}}>
                  <p>{npc.proficiency_bonus}</p>
                </Box>
                <Box sx={{ border: '1px solid grey', borderRadius: '8px', display: 'flex', justifyContent: 'flex-end', height: '80%', width: '60%'}}>
                  <p style={{fontSize: '8px'}}>Proficiency Bonus</p>
                </Box>
              </Box>
              <SavingThrows saves={npc.saving_throws} pb={npc.proficiency_bonus}/>
              <ProficienciesList profs={npc.proficiencies}/>  
            </Box>
          </Box>
          <Box sx={{display: 'flex', flex: 2, background: '	#C0C0C0', padding: '5px', borderRadius: '3%', flexDirection: 'column', height: 'content'}}>
            <SmallStatsBoxes speed={npc.speed} ac={npc.ac} initiative={npc.ability_score[2].plus}/>
            <Box sx={{display: 'flex', flexDirection: 'column', flex: 4}}>
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
              <Box sx={{display: 'flex', flexDirection: 'row', padding: '3px'}}>
                <Box sx={{border: '2px double grey', display: 'flex', flexDirection: 'column', flex: 1, height: '150px'}}>
                  <p>Total Hit Die: 7 D8</p>
                  <p>Current Hit Die: 7</p>
                </Box>
                <Box sx={{border: '2px double grey', display: 'flex', flexDirection: 'column', flex: 1, height: '150px'}}>
                  <p>Success () () ()</p>
                  <p>Failures () () ()</p>
                  <p>Death Saves</p>
                </Box>
              </Box>
              <Box>
                <ActionsBox actions={npc.abilities}/>
              </Box>
  
            </Box>
            
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', padding: '2px', borderRadius: '20%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <DamageMods immunities={npc.immunities} resistances={npc.resistance} vunerabilities={npc.vunerability} />
            </Box>
            <Box>
              {npc.abilities?.special_ability ? 
                <OtherAbilities ability={npc.abilities?.special_ability} /> :
              null }
            </Box>
            <Box>
              {npc.abilities?.reaction ? 
                <OtherAbilities ability={npc.abilities?.reaction} /> :
              null }
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default LargeCharacterDetails


const OtherAbilities = ({ability}) => {

  
  return (
    <Box>
      {ability.map((action, index) => {
        return (
          <Box key={index} sx={{display: 'flex', justifyContent: 'flex-start'}}>
            <p>{action.name}</p>
            <p>{action.description}</p>
          </Box>
        )
      })}
    </Box>
  )
}

const DamageMods = ({immunities, resistances, vunerabilities}) => {
  
  return(
    <Box >
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p sx={{fontSize: '14px', margin: 0}}>Immunities: </p>
        <Box sx={{fontSize: '12px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          {immunities.map((res, index) => {return (
            <p sx={{margin: '3px'}} key={index} > {res} &nbsp;</p>
          )})}
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p sx={{fontSize: '14px', margin: 0}}>Resistances: </p>
        <Box sx={{fontSize: '12px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          {resistances.map((res, index) => {return (
            <p sx={{margin: '3px'}} key={index}> {res} &nbsp;</p>
          )})}
        </Box>
      </Box>
      <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p sx={{fontSize: '14px', margin: 0}}>Vunerabilities: </p>
        <Box sx={{fontSize: '12px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          {vunerabilities.map((res, index) => {return (
            <p sx={{margin: '1px'}} key={index}> {res} &nbsp;</p>
          )})}
        </Box>
      </Box>
    </Box>
  )
}
const ActionsBox = ({actions}) => {
  const attacks = actions?.attack;

 
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <h3>Attacks</h3>
      {attacks.map((hit, index) => (
        <AttackBox attackAction={hit} key={index}/>
      ))}
    </Box>
  )
}

const calculateAttack = (dice, plus, roll) => {
  return dice * roll + plus;
}
const AttackBox = (props) => {
  const {attackAction} = props;

  
  const damageEst = calculateAttack(attackAction.damage.dice, attackAction.damage.plus, attackAction.damage.roll);
  const rollCriteria = attackAction.damage.roll + "  D" +  attackAction.damage.dice + " + " + attackAction.damage.plus; 
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>{attackAction.name} - {attackAction.damage_type}</h3>
        <p>Est Damage: {damageEst}</p>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <Box>
        <h3>Plus to hit: </h3>
        <h4>{attackAction.plus_to_hit}</h4>
        </Box>
        <Box>
          <h3>Roll:</h3>
          <h4>{rollCriteria}</h4>
        </Box>
      </Box>
      <Box>
        {attackAction.damage?.effect ?
        <Box  sx={{ display: 'flex', flexWrap: 'wrap'}}>
            <h3>Effect:</h3>
          <Box sx={{display: 'flex', alignItems: 'baseline' }}> 
            <Box sx={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
              <Box sx={{display: 'flex'}}>
                <p> Description: {attackAction.damage.effect.desc}.</p> 
                <p>{attackAction.damage.aoe.area} ft. {attackAction.damage.aoe.shape}</p>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                <p> {attackAction.damage.effect.dc.type} Save | {attackAction.damage.effect.dc.save} </p> 
                <p> On Saving: {attackAction.damage.effect.dc.on_save.map((save) => (<p>{save}</p>))} </p>
              </Box>
            </Box>
            </Box>
          </Box> : null }
      </Box>
    </Box>
  )
}
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
  const {name, type, sub_type, desc} = props;
  return (
    <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between',flex: 5, width: '100%', padding: '1rem'}}>
      <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', border: '4px solid grey'}}>
        <h1>{name}</h1>
        <h4>Character Name</h4>
      </Box>
      <Box sx={{flex: 1}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '1rem', alignItems: 'flex-start'}}>
         <h3>Type: </h3><p> {type}</p>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '1rem', alignItems: 'flex-start'}}>
          <h3>Sub Type: </h3>
          <p> {sub_type}</p>
        </Box>
    
        
      </Box>
      <Box sx={{display: 'flex', width: '300px', alignItems: 'center', justifyContent: 'flex-start'}}>
        <p>{desc}</p>
      </Box>
    </Box>
  )
  
}