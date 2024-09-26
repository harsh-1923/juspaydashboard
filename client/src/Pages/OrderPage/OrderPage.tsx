import { useState } from "react";
import { Contact } from "../../Components/Contacts/Contacts";
import Calendar from "../../Components/IconSet/Calendar";
import { formatElapsedTime } from "../../utils/utils";
import "./OrderPage.css";
import { toast } from "sonner";
import { getOrderList } from "@/Services/OrderPageServices";
import { StatusParserProps } from "./OrderTypes";
import { Filter, Plus, Sort } from "@/Components/IconSet";

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

  const currentOrders = [...filteredOrderDetails].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();

    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

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
      <div
        className="status-indicator"
        style={{ backgroundColor: color }}
      ></div>
      {text}
    </div>
  );
};

export default OrderPage;
