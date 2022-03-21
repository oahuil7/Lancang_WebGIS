import PanelButton from "./PanelButton"

const BcPanelButton = () => {
  const Opts = [
    {
      label: "校正前降水",
      value: "bc_raw_pr",
    },
    {
      label: "校正后降水",
      value: "bc_de_pr",
    },
    {
      label: "校正前最高温",
      value: "bc_raw_tasmax",
    },
    {
      label: "校正后最高温",
      value: "bc_de_tasmax",
    },
    {
      label: "校正前最低温",
      value: "bc_raw_tasmin",
    },
    {
      label: "校正后最低温",
      value: "bc_de_tasmin",
    }
  ]

  return <PanelButton Opts={Opts} width={280}></PanelButton>
}

export default BcPanelButton