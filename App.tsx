import { Provider } from "react-redux";
import AppCotnainer from "./src/components/AppCotnainer";
import AppNavigator from "./src/navigation";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppCotnainer>
        <AppNavigator/>
      </AppCotnainer>
    </Provider>
  );
};

export default App;
