import "antd/dist/antd.css";
import { Provider } from "mobx-react";
import React from "react";
import { render } from "react-dom";

import "./api";
import App from "./app";
import "./index.css";
import { stores } from "./stores";

const root = document.createElement("div");
document.body.appendChild(root);

render(
    <Provider {...stores}>
        <App />
    </Provider>,
    root
);
