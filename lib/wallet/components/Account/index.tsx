import { useWallet } from 'domains'
import type { FC } from 'react'
import { Fragment } from 'react'

import { textCenterEllipsis } from 'app/utils/string/text-center-ellipsis'

import { Paragraph } from 'components/Typography'

type AccountProps = {
  onlyENSName?: boolean
}
export const Account: FC<AccountProps> = ({ onlyENSName }) => {
  const {
    walletAccount,
    ens: { useGetENSName },
  } = useWallet()

  const ENSName = useGetENSName(walletAccount)

  if (onlyENSName) {
    return <Fragment>{ENSName || textCenterEllipsis(walletAccount)}</Fragment>
  }

  return (
    <Fragment>
      {textCenterEllipsis(walletAccount)}
      <Paragraph color="text.secondary">{ENSName && `(${ENSName})`}</Paragraph>
    </Fragment>
  )
}

export default Account
