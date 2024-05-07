import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    <Stack h="100vh">
      <Box>
        <Navbar />
        <Container>
          <TodoForm />
          <TodoList />
        </Container>
        <Text textAlign="center" fontSize="sm" py={2}>
          Made with love by Shubh ❤️
        </Text>
      </Box>
    </Stack>
  );
}

export default App;
