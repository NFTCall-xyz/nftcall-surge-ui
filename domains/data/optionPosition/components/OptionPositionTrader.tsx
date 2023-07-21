import { useWallet } from 'domains'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { Span } from 'components/Typography'
import LinkToAddress from 'components/button/LinkToAddress'

type OptionPositionTraderProps = {
  rowData: any
}
const OptionPositionTrader: FC<OptionPositionTraderProps> = ({ rowData: { id } }) => {
  const { account } = useWallet()

  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <LinkToAddress address={id} />
        {account?.toLowerCase() === id.toLowerCase() && <Span color="primary">You</Span>}
      </Stack>
    </TableCell>
  )
}

export default OptionPositionTrader
