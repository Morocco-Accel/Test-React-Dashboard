import Root from "routers";
import APIProvider from "api/APIProvider";
//@Style
import "assets/scss/index.scss";

function App() {
  return (
    <APIProvider>
      <Root />
    </APIProvider>
  );
}

export default App;
