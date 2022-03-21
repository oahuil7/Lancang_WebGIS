import PanelButton from "./PanelButton"

const ScPanelButtonPr = () => {
  const Opts = [
    {
      label: "SSP1-2.6 / 2021-2040",
      value: "sc_pr_126_near",
    },
    {
      label: "SSP1-2.6 / 2041-2070",
      value: "sc_pr_126_mid",
    },
    {
      label: "SSP1-2.6 / 2071-2100",
      value: "sc_pr_126_long",
    },
    {
      label: "SSP2-4.5 / 2021-2040",
      value: "sc_pr_245_near",
    },
    {
      label: "SSP2-4.5 / 2041-2070",
      value: "sc_pr_245_mid",
    },
    {
      label: "SSP2-4.5 / 2071-2100",
      value: "sc_pr_245_long",
    },
    {
      label: "SSP5-8.5 / 2021-2040",
      value: "sc_pr_585_near",
    },
    {
      label: "SSP5-8.5 / 2041-2070",
      value: "sc_pr_585_mid",
    },
    {
      label: "SSP5-8.5 / 2071-2100",
      value: "sc_pr_585_long",
    },
  ]

  return <PanelButton Opts={Opts} width={545}></PanelButton>
}

export default ScPanelButtonPr