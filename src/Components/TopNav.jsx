import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { LiaUserCircleSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";

const TopNav = ({title , onOpen}) => {
  return (
    <Box px={4} bg={"white"} >
      <HStack
        maxWidth={"70rem"}
        mx={"auto"}
        h={16}
        justify={"space-between"} 
      >
        <Icon as={FaBars} onClick={onOpen} display={
          {base:"block",
          lg: "none"
          }
        }/> 
        <Heading fontSize={"28px"}>{title}</Heading>
        <Menu>
          <MenuButton ><Icon as= {LiaUserCircleSolid} fontSize={"34px"}/></MenuButton>
          
          <MenuList>
            <MenuItem>Log Out</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Setting</MenuItem>
            
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
