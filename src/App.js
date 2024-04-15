import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <provider store = {appStore}>
      <Body />
    </provider>
   
  );
}

export default App;
