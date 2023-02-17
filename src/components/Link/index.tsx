import NextLink from 'next/link'

interface LinkProps {
  href: string
  children: string
}

export default function Link(props: LinkProps) {
  const { href, children } = props

  return (
    <NextLink href={href} className="text-gray-300 hover:text-white">
      {children}
    </NextLink>
  )
}
