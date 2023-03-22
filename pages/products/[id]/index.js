/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { products } from '../../../products';
import Head from "next/head";
import { useState } from "react";
import CardDetail from "../../../components/CardDetail/CardDetail";
import CardImg from "../../../components/CardImg/CardImg";
import Layouts from "../../../components/Layouts/Layouts";
import Section from '../../../components/Section/Section';
import style from './Detail.module.css';


export default function Detail({product}){
  const [data, setData] = useState(product) 
  
  // console.log(data.review[1].userName)
  
  const dotPrice =(numb)=>{
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  const priceDisc=(numb, disc)=>{
    const temp = numb/disc
    // console.log(temp)
    return parseInt(numb-temp)
  }


  // const router = useRouter();
  // const { shoesId } = router.query;
  
  // useEffect(() => {
  //   console.log(products)

  //   const result = products.filter((data) => {
  //       return data.id == parseInt(shoesId);
  //   });
  //   setData(result);
  // },[shoesId]);
  
  return (
    <Layouts>
      <Head>
        <title>Shoes Store | Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Section>
        <div className={style.container}>
          <div className={style.content}>
            <CardImg img={data.img}/>
            <CardDetail 
              idProduct={data.id}
              image={data.img}
              title={data.name} 
              price={dotPrice(data.price)}
              priceAftDisc={dotPrice(priceDisc(data.price, data.discount))}
              rating={data.rating} 
              desc={data.desc} 
              discount={data.discount}
              // dataShoes={data.review}
            />
          </div>
        </div>
        {/* <div className={style.containerReview}>
          <h1 className={style.title}>Review Products</h1>
          {data.review?.map((review, i)=>
            <div key={i} className={style.wrapperReview}>
              <CardReview
                name={review.userName}
                review={review.comment}
              />
            </div>
          )}
        </div> */}
      </Section>
    </Layouts>
  )
}
export async function getServerSideProps({params}){
  const res = await fetch('http://localhost:3000/api/product/'+params.id)
  const product = await res.json()
  return {
    props:{
      product
    }
  }
}