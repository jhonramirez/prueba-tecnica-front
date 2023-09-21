import { render, screen } from "@testing-library/react";
import AppPage from "./AppPage";
import { AppPages } from "../../constans/constans";
import { PageContex } from "../App";

describe("AppPage test", () => {
  test("should render startPage", () => {
    render(
      <PageContex.Provider value={{ page: AppPages.start }}>
        <AppPage />
      </PageContex.Provider>
    );
    expect(screen.getByText("Consulta de usuario")).toBeInTheDocument();
  });
  test("should render summaryPage", () => {
    render(
      <PageContex.Provider
        value={{
          page: AppPages.summary,
          user: {
            name: "Juanito",
            lastName: "Alimaña",
            country: "Colombia",
            typeDocument: "CC",
            numberDocument: 12345678,
          },
        }}
      >
        <AppPage />
      </PageContex.Provider>
    );
    expect(screen.getByText("Información básica")).toBeInTheDocument();
  });
});
