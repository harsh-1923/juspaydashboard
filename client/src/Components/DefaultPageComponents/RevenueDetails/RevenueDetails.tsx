import { DoubleLineChart } from "@/Components/Charts/LineChart/LineChart";
import Map from "@/Components/IconSet/Map";
import ProgressBar from "@/Components/ProgressBar/ProgressBar";
import "./RevenueDetails.css";

// Define types for progress data
type ProgressData = {
  location: string;
  amount: string;
  value: number;
  total: number;
};

const progressData: ProgressData[] = [
  { location: "San Francisco", amount: "$72K", value: 5, total: 10 },
  { location: "New York", amount: "$65K", value: 6, total: 10 },
  { location: "Los Angeles", amount: "$58K", value: 4, total: 10 },
  { location: "Chicago", amount: "$80K", value: 7, total: 10 },
];

const RevenueDetails = () => {
  return (
    <div className="revenue-details-grid">
      <div
        className="revenue-chart-wrapper info-tile"
        aria-labelledby="revenue-chart-title"
      >
        <header className="info-header" id="revenue-chart-title">
          <h2>Revenue</h2>
          <div className="w-[2px] h-[20px] dark:bg-gray-50"></div>
          <div className="flex items-center gap-2">
            <div
              className="rounded-full"
              style={{ width: "5px", height: "5px", backgroundColor: "red" }}
            ></div>
            <span>Current Week $58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="rounded-full"
              style={{ width: "5px", height: "5px", backgroundColor: "blue" }}
            ></div>
            <span>Previous Week $50,100</span>
          </div>
        </header>
        <div>
          <DoubleLineChart />
        </div>
      </div>

      <div className="info-tile" style={{ justifyContent: "space-between" }}>
        <header className="info-header" id="revenue-worldwide-title">
          <h2>Revenue by Location</h2>
        </header>
        <div className="mx-auto">
          <Map />
        </div>
        {progressData.map((data, index) => (
          <div key={index} className="revenue-worldwide-progress-wrapper">
            <div>
              <p>{data.location}</p>
              <p>{data.amount}</p>
            </div>
            <ProgressBar val={data.value} totalVal={data.total} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueDetails;
