import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loadProductRead} from "../../store/actions/productAction";
import styles from './Site.module.sass'
import DetailedProdHeading from "../../components/UI/Heading/DetailedProdHeading";
import {IProdReadOnly} from "../../interface/IProduct";
import DetailProdLayout1 from "../../components/SiteComponents/DetaiProductPage/DetailProdLayout1";
import DetailProdLayout2 from "../../components/SiteComponents/DetaiProductPage/DetailProdLayout2";
import {IButtonSettings} from "../../interface/ICommonSettings";

const ProductPage = () => {
    const {prodId} = useParams();
    const dispatch = useAppDispatch();
    const {prodPageSettings} = useAppSelector(state => state.prodPageSettingsReducer)
    const {productReadOnly, isLoading} = useAppSelector(state => state.productReducer)


    useEffect(() => {
        if (prodId) dispatch(loadProductRead(parseInt(prodId)))
        if (productReadOnly) document.title = productReadOnly.name
    }, [])

    console.log(prodPageSettings, productReadOnly)

    function payClickHandle(prod: IProdReadOnly) {
        console.log(prod)
    }
    function getDetailProductByLayout(contentLayout: string, productReadOnly: IProdReadOnly) {
        if (contentLayout === '1') {
            return (<DetailProdLayout1
                productReadOnly={productReadOnly}
                payClickHandle={payClickHandle}
            />)
        } else if (contentLayout === '2') {
            return (<DetailProdLayout2
                productReadOnly={productReadOnly}
                payClickHandle={payClickHandle}
            />)
        }

    }

    return prodPageSettings && productReadOnly
        ? (<main className={styles.page__container} style={{background: prodPageSettings.background, alignItems: 'center'}}>
            <DetailedProdHeading pageHeading={prodPageSettings.headingSettings} prodName={productReadOnly.name}/>
            {getDetailProductByLayout(prodPageSettings.contentLayout, productReadOnly)}
        </main>)
        : (<main className={styles.page__container}></main>)
};

export default ProductPage;