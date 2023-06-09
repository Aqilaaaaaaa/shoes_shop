import { useSession } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import Layouts from '../../components/Layouts/Layouts'
import Section from '../../components/Section/Section'
import { TableHistory } from '../../components/TableHistory/TableHistory'
import style from './History.module.css'

export default function index({product}) {
  // console.log(product)
  const {data : session} = useSession()

  const sumPrice =(data)=>{
    for(var i=0; i<data.length; i++){
      return (data[i].price+data[i+1].price)
    }
  }
  
  return (
    <>
      <Head>
        <title>Shoes Shop | History Payment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Layouts>
        <div className={style.container}>
          <Section>
            <h1 className={style.title}>History Payment</h1>
            {session?
              <img className={style.img} src={session?.user?.image} width={70} height={70}/>:
              <FaUser className={style.img} size={30}/>
            }
            <div className={style.wrapperContent}>
              <h4 className={style.subtitle}>Summarize</h4>
              <p className={style.text}>User Name: <span> {session? `${session?.user?.name}`: 'hello world'}</span></p>
              <p className={style.text}>Emai: <span> {session? `${session?.user?.email}`: 'helloworld@mail.com'}</span></p>
              <p className={style.text}>Total Spent: <span> Rp. {sumPrice(product)}</span></p>
            </div>
            <div className={style.wrapperTable}>
              <TableHistory dataHistory={product}/>
            </div>
          </Section>
        </div>
      </Layouts>
    </>
  )
}
export async function getStaticProps(){
  try{
    const res = await fetch('http://localhost:3000/api/product')
    const product = await res.json()
    return {
      props:{
        product
      }
    }
  }
  catch(err){
    console.error(err)
  }
  return {
    props:{
      product
    }
  }
}
