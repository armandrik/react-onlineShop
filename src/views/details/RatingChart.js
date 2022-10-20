import React from 'react'
import Rating from 'react-rating'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export const RatingChart = ({ratingValue}) => {

    return (
        <div>
            <Rating
                initialRating={ratingValue ? ratingValue.rate : null}
                readonly
                emptySymbol={<StarBorderIcon sx={{color : '#ffbd2e'}}/>}
                fullSymbol={<StarIcon sx={{color : '#ffbd2e'}}/>}
            />
        </div>
    )
}
