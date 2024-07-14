import React from "react";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Name" />
      <br />
      <textarea type="textbox" placeholder="Text" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
