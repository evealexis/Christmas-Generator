import Countdown from "./Countdown";

function Header({getSeconds, getDays, getHours, getMinutes}) {
  return (
    
    <div className="header">
      <ul>
        <li>
          <Countdown getSeconds={getSeconds} getDays={getDays} getHours={getHours} getMinutes={getMinutes} />
        </li>
      </ul>
    </div>
  );
}

export default Header;
