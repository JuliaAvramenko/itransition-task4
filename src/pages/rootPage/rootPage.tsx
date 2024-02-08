import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../../components/header/header'


const RootPage = () => {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default RootPage