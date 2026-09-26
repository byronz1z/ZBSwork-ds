import type { IconProps } from './icons/props.ts'

/** Display options for the brand wordmark. */
export interface BrandWordmarkProps extends IconProps {
  /** Whether to include the leading mark; defaults to true. */
  includeMark?: boolean | undefined
}

/** Render the ZBSwork wordmark. */
export function BrandWordmark({ size = 24, className, includeMark = true }: BrandWordmarkProps) {
  return (
    <span
      className={className}
      style={{
        fontSize: size,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: '0.02em',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      {includeMark ? 'ZBSwork' : 'ZBSwork'}
    </span>
  )
}
