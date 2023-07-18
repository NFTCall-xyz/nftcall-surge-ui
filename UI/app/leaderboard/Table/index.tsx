import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

type PositionsProps = {}
const Positions: FC<PositionsProps> = () => {
  const table = useTable()

  return <BasicTable {...table} />
}

export default Positions
