import React, { useState } from "react";
import AppPage from "./AppPage/AppPage";
import { AppPages } from "../constans/constans";

import { createContext } from "react";

export const PageContex = createContext();

const App = () => {
  const [page, setPage] = useState(AppPages.start);
  const [user, setUser] = useState({});

  return (
    <PageContex.Provider value={{ page, setPage, user, setUser }}>
      <AppPage />
    </PageContex.Provider>
  );
};

export default App;
