import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
          <Route path="/about/*" element={<Home />} />
          <Route path="/academics/*" element={<Home />} />
          <Route path="/admissions/*" element={<Home />} />
          <Route path="/student-life/*" element={<Home />} />
          <Route path="/facilities/*" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/contact" element={<Home />} />

          {/* Allow Tempo routes to be captured before the catchall */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
