import React, { useEffect, useState } from 'react'
import Layouts from '../../components/Layouts/Layouts'
import Head from 'next/head'
import styles from './Carts.module.css'
import Section from '../../components/Section/Section'
import Select from '../../components/Select/Select'
import Card from '../../components/Card/Card'
import CardCart from '../../components/CardCart/CardCart'
import Payment from '../../components/Payment/Payment'
import { useRouter } from 'next/router'

const index = () => {
    const [data, setData] = useState([])
    // const [isChecked, setIsChecked] = useState(false)

    const getItemFromLocal = () => {
        const dataLocal = localStorage.getItem('cart')
        setData(JSON.parse(dataLocal))
        console.log(dataLocal);
    }

    useEffect(() => {
        getItemFromLocal()
    }, [])


    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layouts>
                <Section>
                    <h1 className={styles.title}>cart</h1>
                    <div className={styles.container}>
                        <div className={styles.products}>
                            {data
                                ? data.map((shoes, i) =>
                                    <CardCart
                                        key={i}
                                        idProduct={shoes.id}
                                        brand={'nike'}
                                        name={shoes.name}
                                        img={'/sepatu.png'}
                                        price={shoes.price}
                                    />
                                )
                                : <h1>Maaf Tidak Ada Produk di keranjang</h1>
                            }
                        </div>
                        <div className={styles.filter}>
                            <Payment
                                price={0}
                            />
                        </div>

                    </div>
                </Section>
            </Layouts>
        </>
    )
}

export default index
