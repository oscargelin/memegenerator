import data from "../data";
import Meme from "./Meme";
import Styles from "./MainContent.module.scss";
import Button from "./Button";

const MainContent = () => {
  const arr = data.data.memes;
  const memes = arr.map((meme) => <Meme key={meme.id} meme={meme} />);

  const rndNumber = () => {
    return Math.round(Math.random() * 100);
  };

  return (
    <div className={Styles.flex}>
      <div>{memes[rndNumber()]}</div>
      <Button btnText="Click me" />
    </div>
  );
};
export default MainContent;
