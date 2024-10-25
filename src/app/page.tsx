import React from 'react'

import dynamic from 'next/dynamic'

const PageComponent = dynamic(() => import('~/app/landing-page'), {
  ssr: false,
})

function Page() {
  return <PageComponent />
}

export default Page
