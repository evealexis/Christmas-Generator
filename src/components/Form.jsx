import React from "react";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Name" required />
      <br />
      <textarea type="textbox" placeholder="Text" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
