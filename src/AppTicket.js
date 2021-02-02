import React from 'react'
import { UIProvider } from './context/UIContext'
import { RouterPage } from './pages/RouterPage'

export const AppTicket = () => {
    return (
        <>
        <UIProvider>
              <RouterPage/>
        </UIProvider>
        </>
    )
}
