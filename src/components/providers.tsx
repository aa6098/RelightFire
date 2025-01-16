import React , {ReactNode} from 'react'
import { NextUIProvider } from '@nextui-org/react';

function providers({children}: {children: ReactNode}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default providers