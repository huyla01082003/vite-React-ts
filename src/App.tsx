import { Route, BrowserRouter as  Routes } from "react-router-dom";
import LayoutApp from "./common/layout/LayoutApp";
import HomePage from "./pages/homePage/HomePage";


const App: React.FC = () => {
  return (
    
      <Routes>
        <Route element={<LayoutApp/>}>
            <Route path="/" element={<HomePage/>}></Route>
        </Route>
      </Routes>
  );
};

export default App;
