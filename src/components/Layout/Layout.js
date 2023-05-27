import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Portal from '../Portal/Portal'
import BackTop from '../backtop/BackTop'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />
            <BackTop />
            <Portal />
        </>
    )
}

export default Layout