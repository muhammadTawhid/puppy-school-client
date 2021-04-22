import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard'
import wilson from '../../../images/teamMember1.png';
import ema from '../../../images/teamMember2.png';
import aliza from '../../../images/teamMember3.png';


const reviewsData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Reviews = () => {
    return (
        <section className="my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-danger text-uppercase">reviews</h5>
                   <h1 className="text-center">Our Success Story </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                       reviewsData.map(review => <ReviewCard review={review}></ReviewCard>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;