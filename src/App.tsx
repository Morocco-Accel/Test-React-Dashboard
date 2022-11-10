import Root from "routers";
//
import APIProvider from "api/APIProvider";
import { hydrateAuth } from "core";

//@Style
import "assets/scss/index.scss";

//
hydrateAuth();

//
function App() {
  return (
    <APIProvider>
      <Root />
    </APIProvider>
  );
}

export default App;
