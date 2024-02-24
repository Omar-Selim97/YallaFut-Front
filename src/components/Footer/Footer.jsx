import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from "next/link"
import { icons } from './data'
const Footer = () => {
  return (
    <div className={styles.container}>
     <div>
     © copyrights 2024
     </div>
     <div className={styles.social}>
    
     {icons.map(icon=>
      <Link  key={icon.id} href={`https://${icon.url}`}>
       <Image
      
       src={icon.src}
       width={20}
       height={20}
       className={styles.images}
       alt="our social"
     
       />
      
      </Link>
     
    )}
     </div>
    </div>
  )
}

export default Footer
