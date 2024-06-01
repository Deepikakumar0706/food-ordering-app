import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import MainComponent from "./components/maincomponents";

function createPage() {
  const page = (
    <div>
      <div>
        <HeaderComponent></HeaderComponent>
      </div>
      <div>
        <MainComponent></MainComponent>
      </div>

      <div>
        <FooterComponent />
      </div>
    </div>
  );
  const rootEle = ReactDOM.createRoot(document.getElementById("root"));
  rootEle.render(page);
}
createPage();
