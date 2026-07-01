import React from 'react'

const NextImage = (props: Record<string, unknown>) => {
  const { src, alt, ...rest } = props
  return React.createElement('img', { src, alt, ...rest })
}

export default NextImage
