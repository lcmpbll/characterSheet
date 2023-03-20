import * as data from "./data/races";
import { Box, Typography } from "@mui/material";
const getRaceInfo = (data, race) => {
  return Object.values(data.default).filter((details) => details.name === race);
};
const addRaceDetails = (props) => {
  const { character } = props;
  console.log(getRaceInfo(data, "Dragonborn"));
  const raceDetails = getRaceInfo(data, "Dragonborn")[0];
  const abilityBonuses = raceDetails.ability_bonuses;
  console.log(abilityBonuses);
  console.log(character);
  return (
    <Box>
      <h1>{raceDetails.name}</h1>
      <Box display="grid" justifyContent="start">
        <Typography>Stats:</Typography>
        <Box>
          <Box>
            <Typography>Speed: {raceDetails.speed} feet</Typography>
            <Typography>Size: {raceDetails.size}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default addRaceDetails;
