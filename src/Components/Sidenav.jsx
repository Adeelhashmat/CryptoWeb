import { Box, Text, HStack, Icon, Stack, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg={"white"}
      justify={"space-between"}
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      height="100vh"
    >
      <Box>
        <Heading textAlign={"center"} fontSize="20px" as="h1" pt="56px">
          @ADISCODING
        </Heading>
        <Box pt={6} mx="12px">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py={3}
                px={4}
                borderRadius={"10px"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "rgba(23, 23, 23, 1)",
                }}
                color="rgba(121, 126, 130, 1)"
              >
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight={"medium"}>
                  {nav.text}{" "}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box pt={6} mx="12px">
        <Link to={"/support"}>
          <HStack
            py={3}
            px={4}
            borderRadius={"10px"}
            _hover={{
              bg: "#F3F3F7",
              color: "rgba(23, 23, 23, 1)",
            }}
            color="rgba(121, 126, 130, 1)"
          >
            <Icon as={BiSupport} />
            <Text fontSize={"14px"} fontWeight={"medium"}>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
