import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);
function SideBar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("infor_web")}>
          <div className={cx("img_infor")}>
            <img src="https://th.bing.com/th/id/OIP.lruLONjbVNYyN7ruSQREMQHaE8?rs=1&pid=ImgDetMain"></img>
          </div>
          <span>WebApplication</span>
        </div>
        <div className={cx("dashboard")}>
          <p>Dash Board</p>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
          </ul>
        </div>
        <div className={cx("game")}>
          <p>Game</p>
          <ul>
            <li>
              <a href="/admin/room">Phòng</a>
            </li>
            <li>
              <a href="/admin/game">Game</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
