import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import images from "../../../Assets";
const cx = classNames.bind(styles);

function Register() {
  const nav = useNavigate();
  const refUsername = useRef();
  const refPassword = useRef();
  const refPasswordConfirm = useRef();
  const refSdt = useRef();
  const [warning, setwarning] = useState("");
  const handleRegister = () => {
    let username = refUsername.current.value;
    let password = refPassword.current.value;
    let password_confirm = refPasswordConfirm.current.value;
    let sdt = refSdt.current.value;
    if (password != password_confirm) {
      setwarning("Mật khẩu xác nhận không trùng với mật khẩu đã đăng ký");
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      };
      fetch("https://slottool.xyz/api/v1/checkuser", options)
        .then((response) => {
          if (response.status == 200) {
            setwarning("Tên người dùng đã tồn tại");
          }
          if (response.status == 404) {
            const options_insert = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password, sdt }),
            };
            fetch("https://slottool.xyz/api/v1/register", options_insert)
              .then((responseInsert) => {
                if (responseInsert.status == 200) {
                  localStorage.getItem("username", username);
                  nav("/");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div
      className={cx("wrapper")}
      style={{ backgroundImage: `url(${images.login})` }}
    >
      <div className={cx("container")}>
        <div className={cx("container_center")}>
          <div className={cx("infor")}>
            <div className={cx("image")}>
              <img src={images.logo}></img>
            </div>
            <div></div>
          </div>
          <div className={cx("formlogin")}>
            <span className={cx("title")}>Đăng ký</span>
            <div className={cx("form")}>
              <div className={cx("container_input")}>
                <span>Tên đăng nhập*</span>
                <input
                  ref={refUsername}
                  placeholder="vd:username"
                  type="text"
                  className={cx("username")}
                  name="username"
                ></input>
              </div>
              <div className={cx("container_input")}>
                <span>Mật khẩu*</span>
                <input
                  ref={refPassword}
                  placeholder="********"
                  type="password"
                  className={cx("password")}
                  name="password"
                ></input>
              </div>
              <div className={cx("container_input")}>
                <span>Nhập lại mật khẩu*</span>
                <input
                  ref={refPasswordConfirm}
                  placeholder="********"
                  type="password"
                  className={cx("password_seacond")}
                  name="password_seacond"
                ></input>
              </div>
              <div className={cx("container_input")}>
                <span>Nhập số điện thoại*</span>
                <input
                  placeholder="0123456789"
                  ref={refSdt}
                  type="text"
                  className={cx("phone")}
                  name="phone"
                ></input>
              </div>
            </div>
            <div className={cx("remember_pass")}>
              <input
                type="checkbox"
                className={cx("remember_input")}
                name="remember_input"
              ></input>
              <span>Ghi nhớ mật khẩu</span>
            </div>
            <div className={cx("warning_login")}>
              <span>{warning.length > 1 ? <span>{warning}</span> : <></>}</span>
            </div>
            <div className={cx("container_button")}>
              <button className={cx("login")} onClick={handleRegister}>
                <span>Đăng Ký</span>
              </button>
              <button className={cx("register")}>
                <span
                  onClick={() => {
                    nav("/Account");
                  }}
                >
                  {" "}
                  Đăng Nhập
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
