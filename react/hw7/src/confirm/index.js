import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Alert extends Component {
  render() {
    const { onConfirm, msg } = this.props;
    return (
      <div className="alert">
          <div className="alert__box">
            <div className="alert__box__content">{msg}</div>
            <div className="alert__box__btns">
              <div className="alert__box__btn" onClick={() => onConfirm(true)}>Confirm</div>
              <div className="alert__box__btn" onClick={() => onConfirm(false)}>Cancel</div>
            </div>
          </div>
      </div>
    );
  }
}

export default function confirm(msg) {
  return new Promise((resolve, reject) => {
    const instance = document.createElement("div");
    document.body.appendChild(instance);

    ReactDOM.render(
      <Alert
        msg={msg}
        onConfirm={(bool) => {
          ReactDOM.unmountComponentAtNode(instance);
          document.body.removeChild(instance);
          resolve(bool);
        }}
      />,
      instance
    );
  });
}
