import React from 'react'
import { Button, Typography } from '@mui/material';
import { Product } from '../../context/ProductContext';
import { RatingChart } from '../details/RatingChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';

export const Realted = ({ realtId, category }) => {

  const [categoryItem, setCategoryItem] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()

  const { data } = Product()
  const men = data.slice(0, 4)
  const jewel = data.slice(4, 8)
  const electric = data.slice(8, 14)
  const women = data.slice(14, 20)

  const pickCategory = () => {
    {
      if (category === "electronics") {
        setCategoryItem(electric)
      } else if (category === "women's clothing") {
        setCategoryItem(women)
      } else if (category === 'jewelery') {
        setCategoryItem(jewel)
      } else {
        setCategoryItem(men)
      }
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    pickCategory()
    setIsLoading(false)
  }, [])


  const goDetailPage = (id) => {
    realtId(id)
    navigate('/details')
  }

  return (
    <>
      {isLoading ? <h1>loading</h1> :
        <div className='realted-conatien'>
          <Typography variant='h4' align='left' className='header'>Products related to this item</Typography>
          <div className='realted'>
            {categoryItem.map(item => {
              return (
                <div className='containe' key={item.id}>
                  <img src={item.image} />
                  <Typography>{item.title}</Typography>
                  <RatingChart ratingValue={item.rating} />
                  <Typography>{item.price}<AttachMoneyIcon sx={{ color: '#B12704' }} /></Typography>
                  <Button endIcon={<AddShoppingCartIcon />} onClick={() => goDetailPage(item.id)}>Shop now</Button>
                </div>
              )
            })}
          </div>
        </div>
      }

    </>
  )
}
