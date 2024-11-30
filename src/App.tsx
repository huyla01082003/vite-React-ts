import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./common/layout/LayoutApp"; 
const App: React.FC = () => {
  return (
    <Routes>  
       <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;