import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          // icon: "💪",
          style: {
            background: "#282928",
            color: "#fff",
          },
        }}
      />

      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
