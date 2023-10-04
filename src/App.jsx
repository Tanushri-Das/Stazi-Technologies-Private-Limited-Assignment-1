import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
