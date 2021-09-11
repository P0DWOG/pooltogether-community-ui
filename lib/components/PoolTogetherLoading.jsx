import React from 'react'

import PoolTogetherMark from 'assets/images/pool-icon.png'
import { LoadingDots } from 'lib/components/LoadingDots'

export const PoolTogetherLoading = () => {
  return (
    <div className='m-auto flex flex-col'>
      <img
        src={PoolTogetherMark}
        className='w-10 h-0 outline-none mx-auto mb-8'
        style={{ borderWidth: 0 }}
      />
      <LoadingDots />
    </div>
  )
}
