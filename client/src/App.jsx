import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
