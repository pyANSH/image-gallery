import Header from "./components/header/Header";
import "./App.css";
import Home from "./pages/Home";
import Popoup from "./components/popup/Popoup";
import { useSelector } from "react-redux";
function App() {
  const { isPopup } = useSelector((state: any) => state.miscellaneous);
  // code author:pyansh
  return (
    <div className={`${isPopup ? "none" : ""}`}>
      <Header />
      <Home />
      <Popoup />
    </div>
  );
}

export default App;
