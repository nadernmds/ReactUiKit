import React, { Component } from "react";
import CircleDiv from "../View/CircleDiv";
import Offer from "../View/Offer";
class CreateProject extends Component {
  state = {};
  onChangeMin = e => {
    document.getElementById("budgetMinBadge").innerHTML =
      document.getElementById("budgetMin").value * 500000 + "ریال";
  };
  onChangeMax = e => {
    document.getElementById("budgetMaxBadge").innerHTML =
      document.getElementById("budgetMax").value * 500000 + "ریال";
  };
  render() {
    return (
      <div className="uk-width-3-4@m uk-form-stacked" style={{ padding: 30 }}>
        <form className="uk-fieldset">
          <legend>ایجاد پرونده</legend>
          <div className="uk-margin">
            <CircleDiv number="1" />
            <label className="uk-form-label">
              لطفا برای پرونده مورد نظر خود یک عنوان مناسب بنویسید
            </label>
            <input
              type="text"
              id="form-text"
              className="uk-input"
              placeholder=""
            />
          </div>
          <div className="uk-margin">
            <CircleDiv number="2" />
            <label className="uk-form-label">
              خیلی کوتاه در مورد پرونده خود توضیح دهید
            </label>
            <input
              type="text"
              id="form-text"
              className="uk-input"
              placeholder=""
            />
          </div>

          <div className="uk-margin">
            <CircleDiv number="3" />{" "}
            <label className="uk-form-label">
              پرونده شما در چه زمینه ای می باشد؟؟{" "}
            </label>
            <select name="" id="" className="uk-select">
              <option value="" selected>
                لطفا انتخاب کنید
              </option>
              <option value="1">خانواده</option>
              <option value="2">زمین</option>
              <option value="3">قتل</option>
              <option value="4">ضرب و شتم</option>
              <option value="5">تهدید و ارعاب</option>
              <option value="6">رشوه</option>
              <option value="7">فساد مالی</option>
            </select>
          </div>
          <div className="uk-margin">
            <CircleDiv number="4" />
            <label className="uk-form-label">
              در این بخش پرونده خود را به صورت کامل شرح دهید{" "}
            </label>
            <textarea name="" id="" className="uk-textarea" />
          </div>
          <div class="uk-margin">
            <label htmlFor="" className="uk-form-label">
              فایل های و تصاویر مربوط به پرونده را از اینجا بارگذاری کنید
            </label>
            <div data-uk-form-custom>
              <input type="file" multiple />
              <button
                class="uk-button uk-button-default"
                type="button"
                tabindex="-1"
              >
                انتخاب فایل های مربوط به پرونده
              </button>
            </div>
          </div>
          <div className="uk-margin">
            <CircleDiv number="5" />
            <label className="uk-form-label">بودجه شما چقدر است؟؟؟ </label>
            <label htmlFor="" className="uk-label-form">
              حداقل
            </label>

            <input
              onChange={this.onChangeMin}
              type="range"
              name="budget"
              id="budgetMin"
              min="0"
              defaultValue="0"
              max="200"
              step="0.5"
              className="uk-range"
            />
            <span
              style={{ backgroundColor: "red" }}
              className="uk-badge "
              id="budgetMinBadge"
            />
            <br />
            <label htmlFor="" className="uk-label-form">
              حداکثر
            </label>
            <input
              onChange={this.onChangeMax}
              type="range"
              name="budget"
              id="budgetMax"
              min="0"
              defaultValue="0"
              max="200"
              step="0.5"
              className="uk-range"
            />
            <span
              style={{ backgroundColor: "red" }}
              className="uk-badge "
              id="budgetMaxBadge"
            />
          </div>
          <div className="uk-margin ">
            <Offer
              label="برجسته"
              name="special"
              title="30 درصد تخفیف"
              price="15000"
              decription="با پرداخت رقم ناچیزی پرونده خود را برجسته کنید"
            />
            <Offer
              label="برجسته"
              title="30 درصد تخفیف"
              price="29000"
              decription="با پرداخت رقم ناچیزی پرونده خود را برجسته کنید"
            />
          </div>
          <div className="uk-margin">
            <p className="n-left">مبلغ قابل پرداخت 10000000 ریال</p>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-default uk-width-1">
              پرداخت{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
