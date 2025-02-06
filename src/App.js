import { ChakraProvider, Container, SimpleGrid } from "@chakra-ui/react";
import theme from "./theme";
import ProductCard from "./ProductCard";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <ProductCard
            image="https://placehold.co/300x200"
            name="Sample Product"
            description="This is a sample product description."
            price="29.99"
          />
          <ProductCard
            image="https://placehold.co/300x200"
            name="Another Product"
            description="Another sample product for demonstration."
            price="49.99"
          />
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
}

export default App;