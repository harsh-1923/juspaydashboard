import React from "react";
import { Link } from "react-router-dom"; // or use "next/link" for Next.js
import "./Breadcrumb.css"; // Optional CSS for styling

interface BreadcrumbProps {
  separator?: string; // Optional separator, default is ">"
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = ">" }) => {
  // Get the current path from the URL and split it into parts
  const pathnames = window.location.pathname.split("/").filter((x) => x);

  // Dynamically create breadcrumb links based on the pathnames
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          {pathnames.length > 0 && (
            <span className="breadcrumb-separator">{separator}</span>
          )}
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="breadcrumb-item">
              {!isLast ? (
                <Link to={routeTo} className="breadcrumb-link">
                  {decodeURIComponent(name)}
                </Link>
              ) : (
                <span aria-current="page">{decodeURIComponent(name)}</span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
