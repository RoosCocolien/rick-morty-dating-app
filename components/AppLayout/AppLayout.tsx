import { Fragment, ReactNode } from 'react'

import AppHeader from '../AppHeader/AppHeader'

interface LayoutProps {
    children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Fragment>
            <AppHeader />
            <main>{children}</main>
        </Fragment>
    )
}