import Image  from "next/image";
import styles from './Plan.module.css'
import Link from 'next/link'
import Fifa24 from '/public/images/fifa24.jpg'
import FifaAll from '/public/images/fifa20.jpg'

export default function Plan() {
   
    
  return (
   
    <div className={styles.FifaContainer}>
    　　
    
    <Link className={styles.link}   href="/products">
       <Image
       className={styles.image}
        src={Fifa24}
      fill={false}
        alt="First Virsion"
        
        />
         <span className={styles.button}>الإصدار الرابع والخامس</span>
       </Link>
      
    
      <Link  className={styles.link} href="/portofolio">
      <Image
      className={styles.image}
        src={FifaAll}
        fill={false}
        alt="First Virsion"
        
        />
        <span className={styles.button}>كل الإصدارات</span>
      </Link>
       
          
    </div>
  )
}
