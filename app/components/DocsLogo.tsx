import { Link, useLocation } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'
import { I18nToggle } from '@tanstack-dev/components'

type Props = {
  name: string
  libraryId: string
  version: string
  colorFrom: string
  colorTo: string
}

export const DocsLogo = ({
  name,
  version,
  colorFrom,
  colorTo,
  libraryId,
}: Props) => {
  const gradientText = `inline-block text-transparent bg-clip-text bg-gradient-to-r ${colorFrom} ${colorTo}`
  const href = useLocation().href;
  return (
    <>
      <Link to="/" className="font-light">
        TanStack
      </Link>
      <Link
        to={`/$libraryId`}
        className="font-bold whitespace-nowrap"
        params={{ libraryId }}
      >
        <span className={`${gradientText}`}>{name}</span>{' '}
        <span className="text-sm align-super">{version}</span>
      </Link>
      <I18nToggle href={href} />
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </>
  )
}
