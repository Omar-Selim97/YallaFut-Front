import React from "react";
import styles from "./post.module.css";
import Image from 'next/image'
import Link from 'next/link'
async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export async function generatMetadata ({params}) {
  const product =await await getData(params.id)
  return{
    title: product.title,
  description: product.description,
  }
}


export default async function Post  ({params})  {
  const product = await getData(params.id)
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.info}>
          <h1 className={styles.title}>
              {product.title}
          </h1>
          <p className={styles.desc}>
          {product.description}
          </p>
        </div>
        <div className={styles.ImageContainer}>
          <Image
          className={styles.img}
          src={product.thumbnail}
          alt={product.brand}
          fill={true}
          />
          <Link href={`https://wa.link/k18exb`}>
          <span className={styles.author}>Contact Me</span>
          </Link>
        
        </div>
      </header>
      <div className={styles.content}>
      <div className={styles.gallary}>
          {product.images.map(image=>(
            <Image
            key={product.id}
            src={image}
            width={100}
            height={100}
            alt={product.title}
            />
          ))}
        </div>
        <p className={styles.text}>
         {product.description}
        </p>
        <p className={styles.text}>
          {product.price} $
        </p>
        
      </div>
    </div>
  );
};

