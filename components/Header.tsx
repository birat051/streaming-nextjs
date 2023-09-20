'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/next.svg'
import styles from "../styles/header.module.css"
import { usePathname } from 'next/navigation'


function Header() {
  const pathname=usePathname()
  return (
    <header className={styles.header}>
     <Image src={img} height={50} width={50} alt="Next.js logo"/>
      <nav className={styles.navigation}>
        <ul className={styles.navlinks}>
            <li  className={pathname=='/'?styles.active: ''}><Link href='/'>Home</Link></li>
            <li className={pathname=='/posts'?styles.active: ''}><Link href='/posts'>Posts</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
