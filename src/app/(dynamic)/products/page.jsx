import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export const metadata = {
  title: "YallaFut Store - All Products",
  description: "Fifa Account Store",
};


 
export default async function Blog  () {
  const data = await getData()
  const products = data.products
 
  return (

    <div className={styles.mainContainer}>
      {
      products.map(product=>(
           <Link key={product.id} href={`/products/${product.id}`} className={styles.post}>
     
           <div className={styles.imageContainer}>
           <Image
             className={styles.img}
             src={product.thumbnail}
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
               <p className={styles.rate}>
              
                {product.rating}
                ⭐⭐⭐⭐⭐
              
                </p>
               </div>
             </div>
         
            </Link>
      ))}
    
    </div>
  )
}

