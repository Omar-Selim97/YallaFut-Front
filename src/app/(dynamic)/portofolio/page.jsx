import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './portofolio.module.css'
async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export const metadata = {
  title: "YallaFut Store - All Products",
  description: "Fifa Account Store",
}
async function Portofolio ()  {
  const data = await getData()
 
  return (
    <div className={styles.mainContainer}>
       {data.map(product =>   <Link key={product.id} href={`/portofolio/${product.id}`} className={styles.post}>
     
     <div className={styles.imageContainer}>
     <Image
       className={styles.img}
       src={product.image}
       width={350}
       height={250}
       alt={product.title}
       />
     </div>
       <div  className={styles.content}>
         <h1  className={styles.title}>{product.title}</h1>
         <p  className={styles.text}>{product.description}</p>
         <div className={styles.ratePrice}>
         <p className={styles.price}>{product.price}$</p>
        
         </div>
       </div>
   
      </Link>)}
  
  </div>
  )
}

export default Portofolio
