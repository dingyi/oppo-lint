import { h } from 'preact'

export const glyphs = {
  analytics: (
    <g transform="translate(9 9)">
      <path d="M 8 1C 8 0.447693 8.44772 0 9 0C 9.55228 0 10 0.447693 10 1L 10 13C 10 13.5523 9.55228 14 9 14C 8.44772 14 8 13.5523 8 13L 8 1ZM 5 4C 4.44772 4 4 4.44769 4 5L 4 13C 4 13.5523 4.44772 14 5 14C 5.55228 14 6 13.5523 6 13L 6 5C 6 4.44769 5.55228 4 5 4ZM 1 8C 0.447716 8 0 8.44769 0 9L 0 13C 0 13.5523 0.447716 14 1 14C 1.55228 14 2 13.5523 2 13L 2 9C 2 8.44769 1.55228 8 1 8ZM 13 6C 12.4477 6 12 6.44769 12 7L 12 13C 12 13.5523 12.4477 14 13 14C 13.5523 14 14 13.5523 14 13L 14 7C 14 6.44769 13.5523 6 13 6Z" />
    </g>
  ),
}

export const glyphNames = Object.keys(glyphs)

type Props<T> = {
  is?: Function | T | string
  glyph?: keyof typeof glyphs
  size?: number
}

function Icon<T extends React.ElementType = 'svg'>({
  as: Component = 'svg',
  size = 32,
  glyph = 'like',
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) {
  return (
    <Component
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={glyph}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      children={glyphs[glyph as keyof typeof glyphs]}
      {...props}
    />
  )
}

export default Icon