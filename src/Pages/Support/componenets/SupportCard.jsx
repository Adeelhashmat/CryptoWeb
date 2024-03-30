import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  background,
} from "@chakra-ui/react";
import React from "react";
import { color } from "framer-motion";
const SupportCard = ({leftComponenet,icon,title,text}) => {
  return (
    <Flex justifyContent={"center"} gap={6}  flexDir={{
      base:"column",
      xl:"row",
    }}>
      <Stack maxW={"380px"}>
        <Icon as={icon} boxSize={6} color={"p.purple"} />
        <Text as={"h1"} fontWeight={"medium"} textStyle={"h1"}>
          {title}
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
         {text}
        </Text>
      </Stack>
      <Box  maxW={"550px"} width={"full"} >{leftComponenet}</Box>
    </Flex>
  );
};

export default SupportCard;
