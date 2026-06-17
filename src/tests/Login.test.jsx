import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

describe("Login Component", () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test("renders login page", () => {
    render(<Login />);

    expect(
      screen.getByText("Login")
    ).toBeInTheDocument();
  });

  test("login button is displayed", () => {
    render(<Login />);

    const button =
      screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("stores user in localStorage on login", () => {

    Storage.prototype.setItem = jest.fn();

    render(<Login />);

    const button =
      screen.getByRole("button");

    fireEvent.click(button);

    expect(localStorage.setItem)
      .toHaveBeenCalledWith(
        "user",
        "loggedIn"
      );
  });

});