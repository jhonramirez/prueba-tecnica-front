import { render, screen } from "@testing-library/react";
import { PageContex } from "../App";
import SummaryPage from "./SummaryPage";
import { AppPages } from "../../constans/constans";
import userEvent from "@testing-library/user-event";

describe("summaryPage test", () => {
  test("should render info user", () => {
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
        <SummaryPage />
      </PageContex.Provider>
    );

    expect(screen.getByText("Primer nombre")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Juanito")).toBeInTheDocument();
  });

  test("should call button volver", () => {
    const setPage = jest.fn();
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
          setPage,
        }}
      >
        <SummaryPage />
      </PageContex.Provider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(setPage).toBeCalled();
  });
});
