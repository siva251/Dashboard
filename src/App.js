import "./style.scss";
import { ComponentsProvider } from './Context/ComponentsContext';
import DynamicComponents from './DynamicComponent/DynamicComponents';
import Header from "./Components/Header";


function App() {
  return (
    <div className="container">
    <ComponentsProvider>
      <Header/>
    <DynamicComponents />
  </ComponentsProvider>
    </div>
  );
}

export default App;
