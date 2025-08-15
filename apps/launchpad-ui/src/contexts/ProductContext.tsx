import { LaunchPadAPI } from "@repo/launchpad-api";
import React, { useEffect } from "react";

interface ProjectContextType {}

export const ProjectsContext = React.createContext<ProjectContextType | null>(
  null
);

const ProjectsContextProvider: React.FC<Readonly<React.PropsWithChildren>> = ({
  children,
}) => {
  const contextValue: ProjectContextType = { children };
  useEffect(() => {}, []);
  return (
    <ProjectsContext.Provider value={contextValue}></ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
