import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BodyContainer from "./Components/BodyContainer/BodyContainer";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Store from "./redux/store/store";


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <div className="row row2">
          <div className="col-md-1 col-lg-1 bg-info p-0">
            <Sidebar />
          </div>
          <div className="col-md-11 col-lg-11 p-0">
            <BodyContainer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
