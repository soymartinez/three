import Head from 'next/head'
import Header from './header'

export default function Layout({ title, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta content='Three.js' />
            </Head>

            <Header />
            <main className='h-screen'>
                {children}
            </main>
        </div>
    )
}
