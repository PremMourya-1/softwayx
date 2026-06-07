import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
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
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
