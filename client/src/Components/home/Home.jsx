import React, { useEffect } from 'react'
import Banner from './Banner'
import { Box, makeStyles } from '@material-ui/core'
import NavBar from './NavBar'
import Slide from './Slide'
import Midsection from './Midsection'
import { useDispatch, useSelector } from 'react-redux'
// import {products} from '../../constant/data';
 import { getProducts as listProducts } from '../../redux/actions/productAction';


const useStyle =makeStyles(theme=>(
    {
        component:{
            padding:10,
            background:'#F2F2F2',
            display:'flex'
        },
        leftComponent: {
            width: '83%',
            [theme.breakpoints.down('md')]: {
                width: '100%'
            }
            
        },
        rightComponent: {
            marginTop: 12,
            background: '#FFFFFF',
            width: '17%',
            marginLeft: 10,
            padding: 5,
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
            
        }
    }
));

const Home = () => {
    const classes=useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

     const getProducts =useSelector(state=>state.getProducts);
     const {products}=getProducts;
    const dispatch =useDispatch();

    useEffect(()=>{

        dispatch(listProducts());

    },[dispatch]);

    return (
        <div>
            <NavBar/>
            <Banner/>
            <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Slide 
                    
                    title='Deals of the Day'
                    timer={true}
                    products={products} 
                
                />
            </Box>
            <Box className={classes.rightComponent}>
                <img src={adURL} style={{width: 232}} alt='Not found'/>
            </Box>

        </Box>
        <Midsection/>

                <Slide 
                    title='Discounts For You'
                    timer={false}
                    products={products}
                    
                    />
            <Slide title='Top Selection'
                    timer={false} 
                    products={products}/>

            <Slide title='Recommended Items'
                    timer={false}
                    products={products} />
            
            <Slide title='Best Seller'
                    timer={false}
                    products={products} />
        </div>
    )
}

export default Home
