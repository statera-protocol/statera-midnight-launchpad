import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TokenGenerator from "./pages/TokenGenerator";
import CreateSale from "./pages/CreateSale";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Success from "./components/Success";
import Error from "./components/Error";
import { useApp } from "./hooks/useApp";

function App() {
  const { error, success } = useApp();

  return (
    <div className="relative w-full h-full">
      {error ||
        (success && (
          <div className="absolute top-16 right-16">
            {error && <Error />}
            {success && <Success />}
          </div>
        ))}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/token-generator" element={<TokenGenerator />} />
        <Route path="/create-sale" element={<CreateSale />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
