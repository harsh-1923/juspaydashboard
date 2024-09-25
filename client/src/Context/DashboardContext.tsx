import { createContext, useContext, useState } from "react";

interface DashboardContextProps {
  dashboardLayoutSettings: {
    showInformationPannel: boolean;
  };
  setDashboardLayoutSettings: React.Dispatch<
    React.SetStateAction<{
      showInformationPannel: boolean;
    }>
  >;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};

export const DashboardProvider: React.FC = ({ children }: any) => {
  const [dashboardLayoutSettings, setDashboardLayoutSettings] = useState({
    showInformationPannel: true,
  });

  return (
    <DashboardContext.Provider
      value={{ dashboardLayoutSettings, setDashboardLayoutSettings }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
