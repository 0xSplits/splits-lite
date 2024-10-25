import React from 'react'

import { cn } from '~/utils/tailwind-utils'

const LoadingIndicator = ({
  fullScreen = true,
  fullHeight = false,
}: {
  fullScreen?: boolean
  fullHeight?: boolean
}): JSX.Element => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center', {
        'h-screen w-screen': fullScreen,
        'h-full w-full py-16': !fullScreen,
        'h-screen': fullHeight,
      })}
    >
      <div className={'h-16 w-16 animate-ping rounded-full bg-gray-300'} />
    </div>
  )
}

export default LoadingIndicator
