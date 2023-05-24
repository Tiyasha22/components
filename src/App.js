import "./App.css";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordianPage from "./pages/AccordianPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDownPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
function App() {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div
        className="col-span-5
      "
      >
        <Route path="/accordian">
          <AccordianPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
