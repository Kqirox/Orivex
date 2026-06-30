import React from 'react'

const NextLink = ({ children, href, ...props }: Record<string, unknown>) => {
  return React.createElement('a', { href, ...props }, children as React.ReactNode)
}

export default NextLink
