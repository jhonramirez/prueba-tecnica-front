import React, { useContext } from "react";
import { AppPages } from "../../constans/constans";
import StartPage from "../StartPage/StartPage";
import SummaryPage from "../SummaryPage/SummaryPage";
import { PageContex } from "../App";

const AppPage = () => {
  const { page } = useContext(PageContex);
  return page === AppPages.start ? <StartPage /> : <SummaryPage />;
};

export default AppPage;
