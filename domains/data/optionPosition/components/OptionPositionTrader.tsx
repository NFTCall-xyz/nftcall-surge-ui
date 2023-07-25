import { useWallet } from 'domains'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import LinkToAddress from 'components/button/LinkToAddress'

type OptionPositionTraderProps = {
  rowData: any
}
const OptionPositionTrader: FC<OptionPositionTraderProps> = ({ rowData: { id } }) => {
  const { account } = useWallet()

  return (
    <TableCell align="center" component="div" sx={{ paddingY: 3 }}>
      <Stack direction="row" spacing={1}>
        <LinkToAddress address={id} />
        {account?.toLowerCase() === id.toLowerCase() && <Chip label={'You'} variant="outlined" />}
      </Stack>
    </TableCell>
  )
}

export default OptionPositionTrader
