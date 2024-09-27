interface ProgressBarProps {
  val: number;
  totalVal: number;
}

const ProgressBar = ({ val, totalVal }: ProgressBarProps) => {
  // Calculate the percentage
  const percentage = (val / totalVal) * 100;

  return (
    <div
      style={{
        backgroundColor: "rgba(28, 28, 28, 0.1)", // Light grey background for the bar
        borderRadius: "5px", // Rounded corners for the progress bar
        height: "2px", // Default height for the progress bar
        width: "100%", // Full width container
        position: "relative", // For positioning the inner bar
        overflow: "hidden", // To ensure no overflow outside the parent container
      }}
    >
      <div
        style={{
          width: `${percentage}%`, // Adjust width based on the percentage
          backgroundColor: "rgba(168, 197, 218, 1)", // Default blue color for the filled progress
          height: "100%", // Same height as the container
          borderRadius: "2px", // Rounded corners for the progress
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
