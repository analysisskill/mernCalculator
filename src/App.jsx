import { useState } from "react";
import "./App.css";
import YouTubeStyleIntro from "./components/YouTubeStyleIntro";
import YtIntro from "./components/YtIntro";

/****
 * TODO: USer input Field
 * TODO: User input Field Operation
 * TODO: create history
 * TODO: show list of history
 * TODO: render History
 *
 */

const InitialInputState = {
  a: 0,
  b: 0,
};
function App() {
  const [inputValue, setinputValue] = useState({ ...InitialInputState });
  const [Result, setResult] = useState(0);

  const handleInputField = (e) => {
    setinputValue({
      ...inputValue,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const handleInputclearOps = () => {
    setinputValue({ ...InitialInputState });
    setResult(0);
  };

  const handleArithmeticOperation = (operations) => {
    // console.log(operations);
    // console.log(eval(`${inputValue.a} ${operations} ${inputValue.b}`));

    const result = new Function(
      "operations",
      `
      return ${inputValue.a} ${operations} ${inputValue.b}
      
      `,
    );
    setResult(result(operations));
    // console.log(result);
    // console.log(result(operations));
  };

  // const handleInputOperation = () => {};

  // const handleInputsA = (e) => {
  //   setinputValue({
  //     ...inputValue,
  //     a: parseInt(e.target.value),
  //   });
  // };
  // const handleInputsB = (e) => {
  //   setinputValue({
  //     ...inputValue,
  //     b: parseInt(e.target.value),
  //   });
  // };

  // const handleInputFields = (key, value) => {
  //   setinputValue({
  //     ...inputValue,
  //     [key]: value,
  //   });
  // };
  // how to call =>  onChange={(e) => handleInputFields("b", e.target.value)}

  // const handleinpoputfieldbyobj = (obj) => {
  //   setinputValue({
  //     ...inputValue,
  //     ...obj,
  //   });
  // };
  // // how to call =>  onChange={(e) => handleInputFields({b: parseint(e.target.value)})}

  return (
    <>
      <section id="calculator-section" className="mt-20">
        <h2>Calculator</h2>
        <h3>Result = {Result}</h3>
        <div className="calculator-input">
          <input
            type="number"
            value={inputValue.a}
            onChange={handleInputField}
            name="a"
          />
          <input
            type="number"
            value={inputValue.b}
            name="b"
            onChange={handleInputField}
          />
        </div>
        <div className="calculator-operation">
          <button onClick={() => handleArithmeticOperation("+")}>+</button>
          <button onClick={() => handleArithmeticOperation("-")}>-</button>
          <button onClick={() => handleArithmeticOperation("*")}>*</button>
          <button onClick={() => handleArithmeticOperation("/")}>/</button>
          <button onClick={() => handleArithmeticOperation("%")}>%</button>
        </div>
        <button className="reset mt-2" onClick={handleInputclearOps}>
          Reset
        </button>
      </section>

      {/* YouTube-Style Intro - Just import and use! */}
      <YouTubeStyleIntro
        brandName="MERN Calculator"
        subtitle="Design • Develop • Deliver"
        logo="🎬"
        duration={5000}
        backgroundColor="bg-black"
      />
      <YtIntro />
    </>
  );
}

export default App;
