import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemRow from "./ItemRow";
import { useEffect, useState } from "react";
import PopupUpPass from "./PopupUpPass";

const cx = classNames.bind(styles);
function Admin() {
  const [datauser, setdatauser] = useState([]);
  const [st, setst] = useState(false);
  const handleChangeSearch = (e) => {
    let username = e.target.value;
    if (username.length > 0) {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username }),
      };
      fetch("https://slottool.xyz/api/v1/finduser", options)
        .then((response) => response.json())
        .then((data) => {
          if (data != undefined) {
            setdatauser(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("https://slottool.xyz/api/v1/getuser")
        .then((response) => response.json())
        .then((data) => {
          if (data != undefined) {
            setdatauser(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    fetch("https://slottool.xyz/api/v1/getuser")
      .then((response) => response.json())
      .then((data) => {
        if (data != undefined) {
          setdatauser(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [st]);
  const handlePage = (state) => {
    setst(!st);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("container_search")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon="search" />
          </div>
          <input
            onChange={handleChangeSearch}
            type="check"
            className={cx("search")}
            placeholder="Nhập từ cần tìm"
          ></input>
        </div>
        <div className={cx("container_data")}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Username</th>
                <th style={{ width: "15%" }}>Số điện thoại</th>
                <th style={{ width: "30%" }}>Xác thực</th>
                <th style={{ width: "30%" }}>Trạng thái</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datauser !== undefined &&
                datauser.length !== 0 &&
                datauser.map((user, index) => {
                  return (
                    <ItemRow key={index} data={user} statePage={handlePage} />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
