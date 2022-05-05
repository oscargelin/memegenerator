import Styles from "./Button.module.scss";

const Button = (props) => {
  const handleClick = (e) => {
    console.log(e.type);
  };

  return (
    <div>
      <button onClick={props.handleClick}>{props.btnText}</button>
    </div>
  );
};
export default Button;
