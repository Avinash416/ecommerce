
import { makeStyles, Typography, Box ,Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles( theme=>({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px'
    },
    image: {
        width: '15%',
        [theme.breakpoints.down('md')]:{
            width:'40%'
        }
    },
    container: {
        textAlign: 'center',
        paddingTop: 70,
        '& > *':{
            marginTop:10,
            fontSize:14
        }
    },
    button:{
        marginTop:20,
        padding:'12px 70px',
        borderRadius:2,
        fontSize:14,
        background:'#2874f0',
        color:'#fff',
    [theme.breakpoints.down('md')]:{
        size:'small'
    }
    }
}))


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();

    const history =useHistory();

    const addItem=()=>{
        history.push('/');
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={imgurl} className={classes.image} alt='' />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now.</Typography>
                <Button className={classes.button} onClick={()=>addItem()} varient="contained">Shop Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart;