import MetricTile from "@/Components/MetricTile/MetricTile";
import "./DefaultPage.css";
import { HollowPieChart } from "@/Components/Charts/HollowPieChart/HollowPieChart";
import { StackedBarChart } from "@/Components/Charts/StackedBarChart/StackedBarChart";
import { DoubleLineChart } from "@/Components/Charts/LineChart/LineChart";
import Map from "@/Components/IconSet/Map";
import ProgressBar from "@/Components/ProgressBar/ProgressBar";
// import StackedBarChart from "@/Components/Charts/StackedBarChart/StackedBarChart";

const DefaultPage = () => {
  return (
    <div className="default-page-wrapper">
      <div className="dashboard-page-header-wrapper">
        <h2>eCommerce</h2>
      </div>
      <div className="default-page-content-wrapper">
        <div className="default-page-quick-metrics-wrapper">
          <div className="default-page-quick-metrics">
            <MetricTile
              value={3781}
              percentageChange={11.01}
              title="Customers"
              type="1"
            />
            <MetricTile
              value={1219}
              percentageChange={-0.03}
              title="Orders"
              type="2"
            />
          </div>
          <div className="default-page-quick-metrics">
            <MetricTile
              value={695}
              percentageChange={+15.03}
              title="Revenue"
              unitType="$"
              type="2"
            />
            <MetricTile
              value={30.1}
              percentageChange={6.08}
              title="Growth"
              type="3"
              unitType="%"
            />
          </div>
        </div>

        <div className="projection-vs-actuals-chart-wrapper">
          <StackedBarChart />
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero. */}
        </div>
      </div>

      <div className="revenue-details-grid">
        <div className="revenue-chart-wrapper">
          <div className="revenue-chart-header">
            <h2>Revenue</h2>
            <div></div>
            <div>Current Week $58, 211</div>
            <div>Current Week $58, 211</div>
          </div>
          <div className="revenue-chart">
            <DoubleLineChart />
          </div>
        </div>
        <div className="revenue-worldwide-wrapper">
          <div className="revenue-worldwide-header">
            <h2>Revenue by location</h2>
          </div>
          <div className="mx-auto">
            <Map />
          </div>
          <div className="revenue-worldwide-progress-wrapper">
            <div>
              <p>San Francisco</p>
              <p>$72K</p>
            </div>
            <ProgressBar val={5} totalVal={10} />
          </div>
          <div className="revenue-worldwide-progress-wrapper">
            <div>
              <p>San Francisco</p>
              <p>$72K</p>
            </div>
            <ProgressBar val={5} totalVal={10} />
          </div>
          <div className="revenue-worldwide-progress-wrapper">
            <div>
              <p>San Francisco</p>
              <p>$72K</p>
            </div>
            <ProgressBar val={5} totalVal={10} />
          </div>
          <div className="revenue-worldwide-progress-wrapper">
            <div>
              <p>San Francisco</p>
              <p>$72K</p>
            </div>
            <ProgressBar val={5} totalVal={10} />
          </div>
        </div>
      </div>

      <div className="default-page-salesdetails-wrapper">
        <div className="default-page-sale-table-wrapper">
          <div className="default-page-sales-table-header">
            <h2>Top Selling Products</h2>
          </div>
          <SalesTable />
        </div>
        <div className="default-page-sales-chart-wrapper">
          <div className="default-page-sales-chart-header">
            <h2>Total Sales</h2>
          </div>
          <HollowPieChart />

          <div className="w-full flex-col gap-4 items-start">
            <div className="flex items-center w-full justify-between pb-2">
              <p>Direct</p>
              <p>Direct</p>
            </div>
            <div className="flex items-center w-full justify-between pb-2">
              <p>Direct</p>
              <p>Direct</p>
            </div>
            <div className="flex items-center w-full justify-between pb-2">
              <p>Direct</p>
              <p>Direct</p>
            </div>
            <div className="flex items-center w-full justify-between">
              <p>Direct</p>
              <p>Direct</p>
            </div>
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

export default DefaultPage;
