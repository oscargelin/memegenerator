import Styles from "./Meme.module.scss";
import Button from "./Button";

const Meme = (props) => {
  return (
    <div className={Styles.flex}>
      <div className={Styles.container}>
        <h2>{props.meme.name}</h2>
        <img src={props.meme.url} />
        <h2>{props.meme.id}</h2>
        <Button btnText="clicker" handleClick={() => console.log(props)} />
      </div>
    </div>
  );
};
export default Meme;
