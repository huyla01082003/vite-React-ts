import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LayoutApp from "./common/layout/LayoutApp";
import HomePage from "./pages/homePage/HomePage";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutApp/>}>
            <Route path="/" element={<HomePage/>}></Route>
            
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
