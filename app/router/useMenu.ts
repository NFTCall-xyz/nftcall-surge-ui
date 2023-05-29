import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

const MenuList = [
  {
    key: 'Home',
    linkTo: '/',
    hide: true,
  },
  {
    key: 'App',
    linkTo: '/app',
    hide: true,
  },
  {
    key: 'Trade',
    linkTo: '/app/trade',
  },
  {
    key: 'Earn',
    linkTo: '/app/earn',
  },
]

export function useMenu() {
  const { t } = useTranslation()
  const router = useRouter()

  const list = useMemo(() => {
    return MenuList.filter(() => true).map((menu) => ({ ...menu, label: t('router:' + menu.key) }))
  }, [t])

  const current = useMemo(() => {
    const linkTo = router.route
    return list.find((item) => item.linkTo === linkTo) || ({} as undefined)
  }, [list, router.route])

  const changeMenu = useCallback(
    (linkTo: string, target?: string) => {
      if (target) return window.open(linkTo, target)
      if (current.linkTo === linkTo) return
      router.push(linkTo)
    },
    [current.linkTo, router]
  )

  return { list, current, changeMenu }
}
