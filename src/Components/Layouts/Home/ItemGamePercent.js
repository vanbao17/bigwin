import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import images from "../../../Assets";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
const cx = classNames.bind(styles);
function ItemGamePercent({ data }) {
  const [percent, setpercent] = useState();
  const [percent1, setpercent1] = useState();
  const [percent2, setpercent2] = useState();
  const [percent3, setpercent3] = useState();
  const [color, setcolor] = useState("");
  const [randomNumbers, setRandomNumbers] = useState([]);
  const isSmallScreen = useMediaQuery({ query: "(max-width:600px)" });
  const handleCheckColor = (num) => {
    if (num >= 0 && num <= 50) {
      return "red";
    } else {
      if (num >= 50 && num <= 80) {
        return "yellow";
      } else {
        return "blue";
      }
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const min = 0;
      const max = 10;
      const newRandomNumber = Math.random() * (max - min + 1) + min;
      setpercent1(newRandomNumber.toFixed(1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const min = 10;
      const max = 20;
      const newRandomNumber = Math.random() * (max - min + 1) + min;
      setpercent2(newRandomNumber.toFixed(1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const min = 25;
      const max = 35;
      const newRandomNumber = Math.random() * (max - min + 1) + min;
      setpercent3(newRandomNumber.toFixed(1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const min = data.min;
      const max = data.max;
      const newRandomNumber = Math.random() * (max - min + 1) + min;
      setpercent(newRandomNumber.toFixed(1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newNumbers = Array.from({ length: 6 }, () => {
        return (Math.random() * 100).toFixed(1);
      });
      setRandomNumbers(newNumbers);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (percent >= 0 && percent <= 50) {
      setcolor("red");
    } else {
      if (percent >= 50 && percent <= 80) {
        setcolor("blue");
      } else {
        setcolor("green");
      }
    }
  }, [percent]);
  return (
    <div className={cx("container_game")}>
      <div className={cx("game_item")}>
        <div className={cx("imagesgame")}>
          <img src={images.test} alt="Example" />
        </div>
        <span className={cx("name_game")}>{data.name_game}</span>

        <div className={cx("image_infor")}>
          <img src={data.link_image}></img>
        </div>
        <span className={cx("num_percent")}>{percent}%</span>
        <div className={cx("progress")}>
          <div
            style={{
              width: `${
                isSmallScreen == false
                  ? Math.floor((435 * percent) / 100)
                  : Math.floor((130 * percent) / 100)
              }px`,
              // backgroundColor: `${color}`,
            }}
            className={cx("progress_bar")}
          ></div>
          <div className={cx("background_progress")}></div>
        </div>

        <div className={cx("background_linear")}></div>
      </div>
      <div className={cx("percent_game")}>
        <img src={images.percent} alt="Example" />
        <span className={cx(`item1`)}>10P</span>
        <span className={cx(`item2`)}>20P</span>
        <span className={cx(`item3`)}>30P</span>
        <span style={{ color: "red" }} className={cx(`item6`)}>
          {percent1}%
        </span>
        <span style={{ color: "red" }} className={cx(`item5`)}>
          {percent2}%
        </span>
        <span style={{ color: "blue" }} className={cx(`item4`)}>
          {percent3}%
        </span>
        {/* {randomNumbers.map((item, index) => {
          const colort = handleCheckColor(item);
          if (index + 1 >= 4) {
            if (index + 1 == 4 && item <= 10) {
              return (
                <span
                  key={index}
                  style={{ color: `${colort}` }}
                  className={cx(`item${index + 1}`)}
                >
                  {item}%
                </span>
              );
            }
            if (index + 1 == 5 && item <= 10) {
              return (
                <span
                  key={index}
                  style={{ color: `${colort}` }}
                  className={cx(`item${index + 1}`)}
                >
                  {item}%
                </span>
              );
            }
            if (index + 1 == 6 && item <= 10) {
              return (
                <span
                  key={index}
                  style={{ color: `${colort}` }}
                  className={cx(`item${index + 1}`)}
                >
                  {item}%
                </span>
              );
            }
          }
        })} */}
      </div>
    </div>
  );
}

export default ItemGamePercent;
