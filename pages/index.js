import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Header from '../sections/homepage/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <main className=''>
        <Header />
      </main>
    </Layout>
  )
}
