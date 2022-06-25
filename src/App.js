import * as React from "react";
const Navbar = React.lazy(() => import("components/Navbar"));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </React.Suspense>
  )
}

export default App;
