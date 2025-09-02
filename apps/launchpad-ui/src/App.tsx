import Dashboard from "./pages/Dashboard";
import TokenGenerator from "./pages/TokenGenerator";
import CreateSale from "./pages/CreateSale";
import ProjectDetail from "./pages/ProjectDetail";
import { useAppDeployment } from "./hooks/useAppDeployment";
import Error from "./components/Error";

function App() {
  const { route, error } = useAppDeployment();

  return (
    <div className="relative w-full min-h-screen">
      {error && (
        <div className="absolute top-8 right-8 z-100">
          <Error message={error} />
        </div>
      )}

      <div className="w-full">
        {route === "dashboard" && <Dashboard />}
        {route === "token-generator" && <TokenGenerator />}
        {route === "create-sale" && <CreateSale />}
        {route === "project-detail" && <ProjectDetail />}
      </div>
    </div>
  );
}

export default App;
