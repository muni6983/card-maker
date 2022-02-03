import Login from "./components/login/login";
import styles from "./app.module.css";
// import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maker from "./components/maker/maker";
function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />}></Route>
          <Route
            path="/maker"
            element={
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
