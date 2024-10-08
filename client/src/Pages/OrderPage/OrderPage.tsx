import { useState } from "react";
import { Contact } from "../../Components/Contacts/Contacts";
import Calendar from "../../Components/IconSet/Calendar";
import { formatElapsedTime } from "../../utils/utils";
import { toast } from "sonner";
import { getOrderList } from "@/Services/OrderPageServices";
import { StatusParserProps } from "./OrderTypes";
import { Filter, Plus, Sort } from "@/Components/IconSet";
import "./OrderPage.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OrderPage = () => {
  return (
    <div className="order-page-wrapper">
      <div className="dashboard-page-header-wrapper">
        <h2>Order List</h2>
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  );
};

const OrderTable = () => {
  const [orderDetails] = useState(getOrderList());
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 entries per page

  const totalPages = Math.ceil(orderDetails.length / itemsPerPage);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm("");
  };

  const handleRowCheck = (orderID: string) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(orderID)
        ? prevSelectedRows.filter((id) => id !== orderID)
        : [...prevSelectedRows, orderID]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orderDetails.map((order) => order.orderID));
    }
    setSelectAll(!selectAll);
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const filteredOrderDetails = orderDetails.filter((order) => {
    const statusText = JSON.parse(order.status).text.toLowerCase();
    return (
      order.orderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      statusText.includes(searchTerm.toLowerCase())
    );
  });

  const sortedOrders = [...filteredOrderDetails].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();

    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = sortedOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <>
      <div className="table-options-wrapper">
        <div>
          <button
            onClick={() => toast.success("Add Order Flow triggered")}
            className="table-options-button"
          >
            <Plus />
          </button>
          <button
            onClick={() => toast.success("Filter Menu Flow triggered")}
            className="table-options-button"
          >
            <Filter />
          </button>
          <button onClick={handleSort} className="table-options-button">
            <Sort />
          </button>
        </div>
        <form
          role="search"
          className="order-search-form"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            id="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </form>
      </div>
      <table className="order-table-root">
        <thead className="order-table-header-row">
          <tr>
            <th className="table-header">
              <input
                type="checkbox"
                className="order-table-checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="table-header">Order ID</th>
            <th className="table-header">User</th>
            <th className="table-header">Project</th>
            <th className="table-header">Address</th>
            <th className="table-header">Date</th>
            <th className="table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.orderID} className="order-table-row">
              <td>
                <input
                  type="checkbox"
                  className="order-table-checkbox"
                  checked={selectedRows.includes(order.orderID)}
                  onChange={() => handleRowCheck(order.orderID)}
                />
              </td>
              <td>{order.orderID}</td>
              <td>
                <Contact
                  name={order.contact.username}
                  src={order.contact.profileUrl}
                />
              </td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--gap-xs)",
                  }}
                >
                  <Calendar />
                  <p>{formatElapsedTime(order.timestamp)}</p>
                </div>
              </td>
              <td>
                <StatusParser status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </button>

        {Array(totalPages)
          .fill(null)
          .map((_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className="pagination-button"
                onClick={() => handlePageClick(pageIndex)}
                data-page-active={pageIndex === currentPage ? "true" : "false"}
              >
                {pageIndex}
              </button>
            );
          })}

        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
};

const StatusParser = ({ status }: StatusParserProps) => {
  const { text, color } = JSON.parse(status);

  return (
    <div
      style={{
        color,
        display: "flex",
        alignItems: "center",
        gap: "var(--gap-xs)",
      }}
    >
      {text}
    </div>
  );
};

export default OrderPage;
