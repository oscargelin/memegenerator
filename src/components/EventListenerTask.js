import Styles from "./EventListenerTask.module.scss";
import aussie from "../images/aussie.png";

const EventListenerTask = (props) => {
  const handleMouseOver = (e) => {
    console.log(e.target.classList.value);
  };
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className={Styles.container}>
      <img
        className={Styles.asdsa}
        src={aussie}
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>{props.btnText}</button>
    </div>
  );
};
export default EventListenerTask;
