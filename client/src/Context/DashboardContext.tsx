import { createContext, useContext, useState, ReactNode } from "react";

interface DashboardContextType {
  dashboardSettings: DashboardSettings;
  setDashboardSettings: (settings: DashboardSettings) => void;
}

interface DashboardSettings {
  showInfoPannel: boolean;
}

const defaultContextValue: DashboardContextType = {
  dashboardSettings: {
    showInfoPannel: true,
  },
  setDashboardSettings: () => {},
};

const DashboardContext =
  createContext<DashboardContextType>(defaultContextValue);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardSettings, setDashboardSettings] = useState<DashboardSettings>(
    {
      showInfoPannel: true,
    }
  );

  const value = {
    dashboardSettings,
    setDashboardSettings,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the DashboardContext
export const useDashboardContext = (): DashboardContextType => {
  return useContext(DashboardContext);
};
