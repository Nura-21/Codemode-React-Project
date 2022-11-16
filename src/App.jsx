import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes";
import { Footer, Header } from "./components";

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
