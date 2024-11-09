import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import router from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
