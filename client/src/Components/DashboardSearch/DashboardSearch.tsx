import React, { useState } from "react";
import { toast } from "sonner";
import "./DashboardSearch.css";

const DashboardSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast(
      searchTerm
        ? `Search for "${searchTerm}" triggered`
        : "Please enter a search term"
    );
    setSearchTerm("");
  };

  return (
    <form
      role="search"
      className="dashboard-search-form"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        id="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default DashboardSearch;
