import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCards";

const InfoCards = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bg={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius={"full"}
      >
        {tagText}
      </Tag>
      <Text mt={4} fontWeight={"medium"} textStyle={"h5"}>
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCards;
