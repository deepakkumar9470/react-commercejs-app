import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    marginLeft : '20px',
    backgroundColor:  '#ededed',
    color : '#000'
  },
  cardImage : {
    width: '100%',
    objectFit: 'cover',
    overFlow: 'hidden'
  },
  view : {
    top: -30,
    left: 0,
    opacity: 6,
    width: '100%',
    display: 'flex',
    color: '#03dac5',
    fontSize :30,
    position: 'absolute',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'rgba(0,0,0,0.7)',
   

  }
  
}));
