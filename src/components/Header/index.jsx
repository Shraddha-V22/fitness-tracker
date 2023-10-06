import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between border p-4">
      <h1 className="text-3xl font-semibold">FitFlow</h1>
      <nav className="flex gap-4 capitalize">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/exercises">exercise</NavLink>
        <NavLink to="/food">food</NavLink>
        <NavLink to="/goals">goals</NavLink>
      </nav>
    </header>
  );
}
