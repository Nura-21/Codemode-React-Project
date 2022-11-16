import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <RouteList />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
