import { HollowPieChart } from "@/Components/Charts/HollowPieChart/HollowPieChart";
import "./SalesDetails.css";

const SalesDetails = () => {
  return (
    <div className="default-page-salesdetails-wrapper">
      <div className="default-page-sale-table-wrapper info-tile">
        <div className="info-header mb-6">
          <h2>Top Selling Products</h2>
        </div>
        <SalesTable />
      </div>
      <div className="default-page-sales-chart-wrapper info-tile">
        <div className="info-header">
          <h2>Total Sales</h2>
        </div>
        <HollowPieChart />

        <div className="sales-chart-details">
          <div>
            <p>Direct</p>
            <p>$300.56</p>
          </div>
          <div>
            <p>Affiliate</p>
            <p>$138.18</p>
          </div>
          <div>
            <p>Sponsored</p>
            <p>$154.02</p>
          </div>
          <div>
            <p>E-mail</p>
            <p>$48.96</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const SalesTable = () => {
  const data = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse" }}
      className="sales-table"
    >
      <thead>
        <tr style={{ textAlign: "left" }}>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesDetails;
