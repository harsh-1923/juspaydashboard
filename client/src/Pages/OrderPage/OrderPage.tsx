import { useState } from "react";
import { Contact } from "../../Components/Contacts/Contacts";
import Calendar from "../../Components/IconSet/Calendar";
import { formatElapsedTime } from "../../utils/utils";
import "./OrderPage.css";
import Sort from "../../Components/IconSet/Sort";
import Plus from "../../Components/IconSet/Plus";
import Filter from "../../Components/IconSet/Filter";

interface StatusParserProps {
  status: Status;
}

enum Status {
  InProgress = '{"text": "In Progress", "color": "rgba(149, 164, 252, 1)"}',
  Complete = '{"text": "Complete", "color": "#70B3A0"}',
  Pending = '{"text": "Pending", "color": "#ADD8E6"}',
  Approved = '{"text": "Approved", "color": "#F8CE7F"}',
  Rejected = '{"text": "Rejected", "color": "#B4B4B4"}',
}

const orderDetails = [
  {
    orderID: "#CM981",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/NataliCraig.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: new Date().toISOString(),
    status: Status.InProgress,
  },
  {
    orderID: "#CM932",
    contact: {
      username: "Kate Morrison",
      profileUrl: "/images/ContactImages/KateMorrison.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Fransisco",
    timestamp: "2024-09-11T14:22:05Z",
    status: Status.Pending,
  },
  {
    orderID: "#CM983",
    contact: {
      username: "Drew Cano",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    timestamp: "2024-09-12T09:03:45Z",
    status: Status.Complete,
  },
  {
    orderID: "#CM984",
    contact: {
      username: "Orlando Diggs",
      profileUrl: "/images/ContactImages/OrlandoDiggs.png",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    timestamp: "2024-09-13T16:17:10Z",
    status: Status.Approved,
  },
  {
    orderID: "#CM985",
    contact: {
      username: "Andi Lane",
      profileUrl: "/images/ContactImages/AndiLane.png",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    timestamp: "2024-09-14T18:30:55Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM982",
    contact: {
      username: "Kate Morrison",
      profileUrl: "/images/ContactImages/KateMorrison.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Fransisco",
    timestamp: "2024-09-11T14:22:05Z",
    status: Status.Rejected,
  },
  {
    orderID: "#CM987",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-16T08:10:15Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM988",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-17T13:25:40Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM989",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-18T12:05:30Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM990",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-19T15:50:20Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM991",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-20T09:40:00Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM992",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-21T07:30:45Z",
    status: Status.InProgress,
  },
];

const OrderTable = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, _] = useState<number>(1);
  const entriesPerPage = 10;

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

  // const generatePageNumbers = () => {
  //   const pageNumbers = [];
  //   const maxVisiblePages = 5;
  //   const halfVisible = Math.floor(maxVisiblePages / 2);

  //   let startPage = Math.max(1, currentPage - halfVisible);
  //   let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  //   if (endPage - startPage + 1 < maxVisiblePages) {
  //     startPage = Math.max(1, endPage - maxVisiblePages + 1);
  //   }

  //   for (let i = startPage; i <= endPage; i++) {
  //     pageNumbers.push(i);
  //   }

  //   return pageNumbers;
  // };

  // Filter orderDetails based on searchTerm
  const filteredOrderDetails = orderDetails.filter((order) => {
    return (
      order.orderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort filteredOrderDetails based on the selected sort order
  const sortedOrderDetails = [...filteredOrderDetails].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.orderID.localeCompare(b.orderID);
    } else {
      return b.orderID.localeCompare(a.orderID);
    }
  });

  // Calculate the orders to display on the current page
  const indexOfLastOrder = currentPage * entriesPerPage;
  const indexOfFirstOrder = indexOfLastOrder - entriesPerPage;
  const currentOrders = sortedOrderDetails.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // // Calculate total pages
  // const totalPages = Math.ceil(sortedOrderDetails.length / entriesPerPage);

  // // Handle page change
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <>
      <div className="table-options-wrapper">
        <div>
          <button onClick={handleSort} className="table-options-button">
            <Plus />
          </button>
          <button onClick={handleSort} className="table-options-button">
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
          />
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
      {/* <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
        >
          <Sun />
        </button>

        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`w-10 h-10 rounded-full ${
              currentPage === pageNumber
                ? "bg-gray-200 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
        >
          <Sun />
        </button>
      </div> */}
    </>
  );
};

const StatusParser = ({ status }: StatusParserProps) => {
  // Parse the enum value to extract text and color
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

const OrderPage = () => {
  return (
    <div className="">
      <div className="dashboard-page-header-wrapper">
        <h2>Order List</h2>
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  );
};

export default OrderPage;
