import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdPersonAddAlt, MdPersonAddAlt1 } from "react-icons/md";
import { FaAddressBook, FaRegAddressBook } from 'react-icons/fa';
import { GiSwapBag, GiFairyWand } from 'react-icons/gi';
import { CiBag1 } from 'react-icons/ci';
import { SlMagicWand } from 'react-icons/sl';


const Menu = () => {
  const [selected, setSelected] = useState("home");
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="200px" height='20px' >
      <Box onClick={() => {setSelected("npc")}}>
        {selected === 'npc' ? <FaAddressBook/> : <Link to={"npc"}> <FaRegAddressBook/> </Link>}
      </Box>
      <Box onClikc ={() => {setSelected("items")}}>
        {selected === "items"? (
          <GiSwapBag/>
        ) :
        (
          <Link to={'items'}>
            <CiBag1/>
          </Link>
        )}
      </Box>
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
      <Box
        onClick={() => {
          setSelected("spells");
        }}
      >
        {selected === "spells" ? (
          <SlMagicWand />
        ) : (
          <Link to={"/spells"}>
            <GiFairyWand />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Menu;
