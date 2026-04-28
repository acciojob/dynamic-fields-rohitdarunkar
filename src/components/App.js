import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index][event.target.name] = event.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />

            {fields.length > 1 && (
              <button type="button" onClick={() => removeField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add More..
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;