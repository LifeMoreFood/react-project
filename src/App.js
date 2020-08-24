import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";

/**
 * @description
 * @author 敬之
 * @date 24/08/2020
 * @param {*} Com
 */
const foo = (Com) => (props) => {
  return (
    <div
      className="border"
      style={{ border: "1px solid red", padding: "20px" }}
    >
      <Com {...props}></Com>
    </div>
  );
};

@foo
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
