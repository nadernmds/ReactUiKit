import React, { Component } from "react";
import Icon from "../Icon/Icon";
class Menu extends Component {
  state = {};
  render() {
    return (
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">
                <Icon Icon="plus" />
                ایجاد
              </a>
              <div
                className="uk-navbar-dropdown"
                uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;"
              >
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="#">ایجاد پرونده خصوصی جدید</a>
                  </li>
                  <li>
                    <a href="#">ایجاد پرونده مدعی العموم</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                <Icon Icon="user" />
                داشبورد
              </a>
              <div
                className="uk-navbar-dropdown"
                uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;"
              >
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="#">داشبورد</a>
                  </li>
                  <li>
                    <a href="#">فعالیت های من</a>
                  </li>
                  <li>
                    <a href="#">پیام های من</a>
                  </li>
                  <li>
                    <a href="#">اطلاعیه های من</a>
                  </li>
                  <li>
                    <a href="#">اختلافات های من</a>
                  </li>
                  <li>
                    <a href="#">آمار</a>
                  </li>
                  <li>
                    <a href="#">دنبال شونده ها</a>
                  </li>
                  <li>
                    <a href="#">دنبال کننده ها</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">ویرایش پروفایل</a>
            </li>
            <li>
              <a href="">تنظیمات حساب کاربری</a>
            </li>
            <li>
              <a href="#">
                <Icon Icon="plus" />
                حساب
              </a>
              <div
                className="uk-navbar-dropdown"
                uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;"
              >
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="#">حساب </a>
                  </li>
                  <li>
                    <a href="#">واریز به حساب </a>
                  </li>
                  <li>
                    <a href="#">برداشت از حساب </a>
                  </li>
                  <li>
                    <a href="#">صورت حساب </a>
                  </li>
                  <li>
                    <a href="#">وکلا </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">ارتقاء عضویت </a>
            </li>
            <li>
              <a href="#">راهنما </a>
            </li>
            <li>
              <a href="#">خروج </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
