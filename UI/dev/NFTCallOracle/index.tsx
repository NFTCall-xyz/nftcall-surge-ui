import type { FC } from 'react'
import { Fragment, useMemo } from 'react'

import Button from '@mui/material/Button'

import { safeGet } from 'app/utils/get'

import Dialog from 'components/dialog/Dialog'

import { DevCard } from '../components/DevCard'
import { DevForm } from '../components/DevForm'
import PageProvider from './Provider'
import { useForm } from './useForm'

export const useDevNFTCallOracle = PageProvider.createUseContext()

const NFTCallOracle: FC = () => {
  const { setAssetPriceDialog, collections, collection } = useDevNFTCallOracle()
  const formData = useForm()
  const data = useMemo(() => {
    return collections.map((collection) => {
      return {
        path: collection.id,
        description: 'setAssetPrice',
        action: <Button onClick={() => setAssetPriceDialog.open(collection.address.collection)}>Set</Button>,
      }
    })
  }, [collections, setAssetPriceDialog])

  return (
    <Fragment>
      <DevCard
        {...{
          title: 'NFTCallOracle',
          data,
        }}
      />
      <Dialog
        {...{
          ...setAssetPriceDialog,
          title: safeGet(() => `SetAssetPrice - ${collection.id}`),
        }}
      >
        <DevForm {...formData} />
      </Dialog>
    </Fragment>
  )
}

export default PageProvider.withProvider(NFTCallOracle)
