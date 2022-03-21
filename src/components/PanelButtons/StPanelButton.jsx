import PanelButton from "./PanelButton";

const StPanelButton = () => {
  const Opts = [
    {
      label: "降水 / SSP1-2.6",
      value: "st_pr_126",
    },
    {
      label: "降水 / SSP2-4.5",
      value: "st_pr_245",
    },
    {
      label: "降水 / SSP5-8.5",
      value: "st_pr_585",
    },
    {
      label: "最高温 / SSP1-2.6",
      value: "st_tasmax_126",
    },
    {
      label: "最高温 / SSP2-4.5",
      value: "st_tasmax_245",
    },
    {
      label: "最高温 / SSP5-8.5",
      value: "st_tasmax_585",
    },
    {
      label: "最低温 / SSP1-2.6",
      value: "st_tasmin_126",
    },
    {
      label: "最低温 / SSP2-4.5",
      value: "st_tasmin_245",
    },
    {
      label: "最低温 / SSP5-8.5",
      value: "st_tasmin_585",
    },
  ]
  
  return <PanelButton Opts={Opts} width={470}></PanelButton>
}

export default StPanelButton