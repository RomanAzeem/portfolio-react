import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AppRoutes = React.lazy(() => import("AppRoutes"));


function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppRoutes />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App;
