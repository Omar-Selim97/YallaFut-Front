import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.css'
import {Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"],
weight:["400"]
});

const Logo = () => {
  return (
    <>
        <Link href='/' className={`${styles.logo} ${lobster.className}`} >
        YallaFut
    </Link>
    </>
  )
}

export default Logo
