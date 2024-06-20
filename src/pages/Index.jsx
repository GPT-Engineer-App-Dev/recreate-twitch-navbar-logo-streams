import { Box, Container, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaTwitch } from "react-icons/fa";

const streamThumbnails = [
  { id: 1, title: "Gaming with Friends", src: "https://example.com/images/gaming-with-friends.jpg" },
  { id: 2, title: "Cooking Live", src: "https://example.com/images/cooking-live.jpg" },
  { id: 3, title: "Music Jam Session", src: "https://example.com/images/music-jam-session.jpg" },
  { id: 4, title: "Art and Craft", src: "https://example.com/images/art-and-craft.jpg" },
];

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="purple.600" color="white" p={4} align="center" justify="space-between">
        <Flex align="center">
          <Image src="/twitch-logo.svg" alt="Twitch Logo" boxSize="40px" />
          <Text fontSize="2xl" fontWeight="bold" ml={2}>Twitch</Text>
        </Flex>
      </Flex>
      <Container maxW="container.xl" mt={4}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
          {streamThumbnails.map((stream) => (
            <Box key={stream.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={stream.src} alt={stream.title} />
              <Box p={4}>
                <Text fontWeight="bold">{stream.title}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;