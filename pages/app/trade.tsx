import UI from 'UI/app/trade'
import type { GetStaticProps, NextPage } from 'next'

import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: ['app-trade'],
})

const Page: NextPage = () => {
  return <UI />
}

export default Page
