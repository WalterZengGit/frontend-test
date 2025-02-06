import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";

const ProductCard = ({ image, name, description, price }) => {
  const handleBuyNow = () => {
    console.log(`Purchased: ${name}`);
  };

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)", transition: "0.3s ease-in-out" }}
      role="region"
      aria-labelledby={`${name}-title`}
    >
      <Image src={image} alt={name} objectFit="cover" w="100%" h={{ base: "150px", md: "200px" }} />

      <Box p={4} flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between">
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Text id={`${name}-title`} fontSize="xl" fontWeight="bold" color="text">
            {name}
          </Text>
          <Text mt={2} color="text" flexGrow={1} minH="60px">
            {description}
          </Text>
          <Text mt={2} fontSize="lg" color="primary" fontWeight="semibold">
            ${price}
          </Text>
        </Box>

        <Flex mt={4} justifyContent="center">
          <Button
            bg="primary"
            color="white"
            _hover={{ bg: "secondary" }}
            onClick={handleBuyNow}
            aria-label={`Buy ${name}`}
            _focus={{ boxShadow: "outline" }}
            w="100%"
          >
            Buy Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;