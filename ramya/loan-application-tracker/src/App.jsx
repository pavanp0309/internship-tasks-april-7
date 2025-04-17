import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <AuthProvider>

        <ScrollToTop />
        <AppRoutes />
      
    </AuthProvider>
  );
};

export default App;
