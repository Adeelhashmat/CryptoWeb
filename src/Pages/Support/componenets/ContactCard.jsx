import {
    Box,
    Button,
    Card,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Stack,
    Text,
    Textarea,
    background,
  } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p={6}  borderRadius={"1rem"} flexGrow={1}>
        <Stack spacing={4}>
        <Text fontWeight={"medium"} fontSize={"sm"}>
          {" "}
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack flexDir={{
      base:"column",
      md:"row",
    }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel>Surename</FormLabel>
            <Input placeholder="Enter Your Surename.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Checkbox defaultChecked>
        <Text fontSize={"xs"}> 
           I agree with{" "}
          <Box as="span" color={"p.purple"}>
            {" "}
            Terms & Conditions.
          </Box></Text>
        </Checkbox>
        <Stack>
          <Button fontSize={"sm"}>
            Send a Message
          </Button>
          <Button
          bg={"silver"} color={"black"} fontSize={"sm"}>
            Book a Meeting{" "}
          </Button>
        </Stack>
        </Stack>
      </Card>
  )
}

export default ContactCard