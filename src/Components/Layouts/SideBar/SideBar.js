import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import images from "../../../Assets";

const cx = classNames.bind(styles);
function SideBar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("infor_web")}>
          <div className={cx("img_infor")}>
            <img src={images.logo} style={{ marginRight: "10px" }}></img>
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
