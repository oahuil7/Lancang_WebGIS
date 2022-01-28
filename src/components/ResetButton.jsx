import { useContext } from "react"
import { MapContext } from "./Context/ContextManager"
import { ResetButtonWrap } from "./Styled"
const bounds = [
  [21, 87],
  [34.5, 111.5]
]

const ResetButton = () => {
  const map = useContext(MapContext)

  const onClick = () => {
    map.fitBounds(bounds)
  }

  return (
    <ResetButtonWrap>
      <button onClick={onClick}>居中</button>
    </ResetButtonWrap>
  )
}

export default ResetButton