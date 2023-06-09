import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import OptPayment from '../OptPayment/OptPayment'
import style from './PurchaseDetail.module.css'


export default function PurchaseDetail({orderId, name, item, brand, adr, img, tax, price, total, discount, idProduct, tagDisc, onOptPayment}) {

  // const [showPurcase, setShowPurcase] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  // const [showReview, setShowReview] = useState(false)

  // const handleShowPurcase =()=>{
  //   setShowPurcase(!showPurcase)
  // }

  const handleShowPayment =()=>{
    setShowPayment(!showPayment)
  }

  return (

    
    <div className={style.container}>
      <h1 className={style.textCheckout}>Checkout</h1>
      <div className={style.containerHeader}>
        <div className={style.containerImg}>
          <Image src={img} width={300+'px'} height={150+'px'} alt='img' objectFit='contain'/>
        </div>
        <div className={style.wrapperContent}>
          <h1 className={style.titleItem}>{item}</h1>
          <p className={style.subTitleItem}>Brand: {brand}</p>
          <p className={style.subTitleItem}>Rp. {price}</p>
          {!tagDisc? '':<div className={style.tagDisc}>{tagDisc}%</div>}
        </div>
      </div>
      <div className={style.wrapper}>
        <h1 className={style.title}>Purchase Detail</h1>
          <p className={style.subtitle}>Order ID<span>{orderId}</span></p>
          <p className={style.subtitle}>Item<span>{item}</span></p>
          <p className={style.subtitle}>Acount Name<span>{name}</span></p>
          <p className={style.subtitle}>Address<span>{adr}</span></p>
          <p className={style.subtitle}>Price<span>Rp. {price}</span></p>
          <p className={style.subtitle}>TAX (10%)<span>Rp. {tax} </span></p>
          <p className={style.subtitle}>Discount {!tagDisc?'': `(${tagDisc}%)`}<span>Rp. {discount}</span></p>
          <p className={style.total}>Total<span>Rp. {total}</span></p>
      </div>
      <div className={style.wrapper}>
        <div className={style.wrapperBtnShow}>
          <h1 className={style.title}>Payment Method</h1>
          {!showPayment? 
            <BiChevronDown onClick={handleShowPayment} style={{cursor: 'pointer', marginTop: '3px'}} size={30}/>
            :
            <BiChevronUp onClick={handleShowPayment} style={{cursor: 'pointer', marginTop: '3px'}} size={30}/>}
        </div>
        {!showPayment? '':
          <div className={style.containerPayemnt}>
            <OptPayment
              name={'Bank Mandiri'}
              code={'007 000 000 0000'}
              img={'/mandiri.svg'}
              value={'opsi'}
              handleOpt={onOptPayment}
              tag={'mandiri'}
            />
            <OptPayment
              name={'Bank BCA'}
              code={'008 000 000 0000'}
              img={'/bca.svg'}
              value={'opsi'}
              handleOpt={onOptPayment}
              tag={'bca'}
            />
            <OptPayment
              name={'Bank BRI'}
              code={'009 000 000 0000'}
              img={'/bri.svg'}
              value={'opsi'}
              handleOpt={onOptPayment}
              tag={'bri'}
            />
          </div>
        }
      </div>
      <div className={style.containerBtn}>
        <button className={style.btnCheckout}>Checkout</button>
        <Link href={`/products/${idProduct}`}> 
          <button className={style.btnBack}>Back</button>
        </Link>
      </div>
    </div>
  )
}
