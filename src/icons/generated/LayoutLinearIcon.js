import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M14 6c-.93 0-1.71.64-1.93 1.5H9.93C9.71 6.64 8.93 6 8 6s-1.71.64-1.93 1.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5h2.13C6.29 9.36 7.07 10 8 10s1.71-.64 1.93-1.5h2.13c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2C16 6.9 15.1 6 14 6z'
]
const svgPaths20 = [
  'M16.5 7a2.5 2.5 0 00-2.45 2h-2.1a2.5 2.5 0 00-4.9 0h-2.1a2.5 2.5 0 100 1h2.1a2.5 2.5 0 004.9 0h2.1a2.5 2.5 0 102.45-3z'
]

export const LayoutLinearIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      name="layout-linear"
      {...props}
    />
  ))
)
