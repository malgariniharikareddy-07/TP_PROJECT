import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../routes/ProtectedRoute";

describe("Integration Test", () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test("user can login and access dashboard", () => {

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </MemoryRouter>
    );

    const loginButton =
      screen.getByText("Login");

    fireEvent.click(loginButton);

    expect(
      localStorage.getItem("user")
    ).toBe("loggedIn");
  });

});