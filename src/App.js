import FormSection from "./compoenents/FormSection/FormSection";
import Navbar from "./compoenents/Navbar/Navbar";
import "./App.css"
import Section1 from "./compoenents/Section1/Section1";
import Section2 from "./compoenents/Section2/Section2";
import Section3 from "./compoenents/Section3/Section3";
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <FormSection></FormSection>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
     {/* <FromSection></FromSection>
     <Section1></Section1>
     <Section2></Section2>
     <Section3></Section3> */}
    </div>
  );
}

export default App;
