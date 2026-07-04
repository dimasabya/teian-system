export function getProgress(status: string) {
  switch (status) {
    case "DRAFT":
      return {
        percent: 16.7,
        label: "Draft",
        color: "bg-gray-400",
      };

    case "SUBMITTED":
      return {
        percent: 33.3,
        label: "Submitted",
        color: "bg-blue-500",
      };

    case "LEADER_REVIEW":
      return {
        percent: 50,
        label: "Leader Review",
        color: "bg-yellow-500",
      };

    case "TQM_REVIEW":
      return {
        percent: 66.6,
        label: "TQM Review",
        color: "bg-orange-500",
      };

    case "VERIFICATION":
      return {
        percent: 83.3,
        label: "Verification",
        color: "bg-cyan-500",
      };

    case "COMPLETED":
      return {
        percent: 100,
        label: "Completed",
        color: "bg-green-500",
      };

    default:
      return {
        percent: 0,
        label: "-",
        color: "bg-gray-300",
      };
  }
}
