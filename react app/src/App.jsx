import './App.css'
import Title from "./Title.jsx"; 
import Description from './Description.jsx';
import ProductTab from './ProductTab.jsx';

function App() {
  return (
    // <div>
    //   <Title />
    //   <Description />
    //   <Title />
    //   <Description />
    // </div>

    //using react fragments
    <>
      <Title />
      <Description />
      <Title />
      <Description />
      <ProductTab />
    </>
  );
}

export default App
