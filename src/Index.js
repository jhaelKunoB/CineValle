import React from 'react';
import { Image, StyleSheet } from 'react-native';
const banner = require('../assets/banner.jpeg')
const  Index = () => {
    return (
        <>
            <Image source={banner} style={styles.bannerImg} resizeMode='contain'></Image>
        </>
    );
}

export default Index


const styles = StyleSheet.create({
    bannerImg: {
        width: "50%",
        height:'60%'
    },
});

  
