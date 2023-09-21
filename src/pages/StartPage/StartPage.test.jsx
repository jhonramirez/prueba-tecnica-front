import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PageContex } from "../App";
import StartPage from "./StartPage";
import { AppPages } from "../../constans/constans";

describe("startPage test", () => {
  test("should render startPage", () => {
    render(
      <PageContex.Provider
        value={{
          page: AppPages.StartPage,
        }}
      >
        <StartPage />
      </PageContex.Provider>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("disabled");
    expect(screen.getByText("Consulta de usuario")).toBeInTheDocument();
  });
});
