import { Button, ChakraProvider } from "ui";
import "./App.css";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Button>Saalve</Button>
      </ChakraProvider>
    </div>
  );
}

export default App;
