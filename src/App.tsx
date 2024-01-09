import "./App.css";
import ImagePicker from "./components/ImagePicker";

function App() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center justify-center space-x-2 space-y-2">
      <ImagePicker />
    </main>
  );
}

export default App;
