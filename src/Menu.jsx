import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdPersonAddAlt, MdPersonAddAlt1 } from "react-icons/md";

const Menu = () => {
  const [selected, setSelected] = useState("home");
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
      <Box
        onClick={() => {
          setSelected("home");
        }}
      >
        {selected === "home" ? (
          <AiFillHome />
        ) : (
          <Link to={"/"}>
            <AiOutlineHome />
          </Link>
        )}
      </Box>
      <Box
        onClick={() => {
          setSelected("newCharacter");
        }}
      >
        {selected === "newCharacter" ? (
          <MdPersonAddAlt1 />
        ) : (
          <Link to={"/new"}>
            <MdPersonAddAlt />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Menu;
