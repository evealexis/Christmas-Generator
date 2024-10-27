import Countdown from "./Countdown";

const Content = ({ getDays, getMinutes, getHours, getSeconds }) => {
  return (
    <div className="page-content">
      <h1>Welcome to Christmas Website!</h1>
      <h2>Christmas Countdown:</h2>
        <Countdown getSeconds={getSeconds} getDays={getDays} getHours={getHours} getMinutes={getMinutes} />
        <br />
        <h2>Christmas API</h2>
        <p>-- Insert Christmas API here --</p>

    </div>
  );
}

export default Content;
