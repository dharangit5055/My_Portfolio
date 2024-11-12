import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { SocialLinks } from "./components/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />

      <SocialLinks />
    </div>
  );
}
