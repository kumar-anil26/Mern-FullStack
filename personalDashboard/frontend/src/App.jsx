import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SpaceDashboard from "./pages/SpaceDashboard";

const App = () => {

  return (
    <Router>
      <Routes>
            <Route
          path="/"
          element={<SpaceDashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
