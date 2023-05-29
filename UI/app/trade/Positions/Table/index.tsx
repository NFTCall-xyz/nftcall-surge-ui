import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

type PositionsProps = {
  isActive: boolean
}
const Positions: FC<PositionsProps> = (props) => {
  const table = useTable(props)

  return <BasicTable {...table} />
}

export default Positions
