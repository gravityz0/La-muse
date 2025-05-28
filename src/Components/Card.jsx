import React from 'react'
import CardImage1 from '../assets/Card-img-1.jpeg'
import CardImage2 from '../assets/Card-img-2.jpeg'
import CardImage3 from '../assets/Card-img-3.jpg'
import './Card.css'

const Card = () => {
  return (
    <div className="container d-md-flex gap-4 mt-5">
        <div className="card mb-3 shadow align-items-center text-center justify-content-center edit custom" data-aos = "fade-up" data-aos-delay ="300" data-aos-easing="ease-in-out" style={{
            backgroundImage: `url(${CardImage3})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundPosition: 'center'
        }}>

                    <div className="card-body position-relative d-flex flex-column align-items-center justify-content-center" style={{zIndex: 2}}>
                        <p className='card-title lh-sm text-white font-style-p1'>Discount</p>
                        <p className='card-text text-white lh-sm font-style'>50%</p>
                        <p className='card-text text-white lh-sm font-style'>OFF</p>
                     </div>

                     <div className='position-absolute top-0 start-0 h-100 w-100' style={{
                        backdropFilter: `blur(3px)`,
                        zIndex: 1,
                        backgroundColor: 'rgba(0,0,0,0.1)'
                     }}></div>
        </div>

        <div className=''>

            <div className="card mb-3 shadow custom" data-aos = "fade-up" data-aos-delay ="500" data-aos-easing="ease-in-out" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4 order-md-2">
                    <img src={CardImage1} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 order-md-1 d-flex  align-items-center justify-content-center p-3">
                    <div className="card-body">
                        <h5 className="card-title font-style-p2">🔥 Flash sale</h5>
                         <p className="card-text font-style-p3">Refresh your wardrobe with up to 50% OFF on selected items.
Shop now before it's gone – limited stock available!</p>
                     </div>
                 </div>
            </div>
        </div>

            <div className="card mb-3 shadow custom"  data-aos = "fade-up" data-aos-delay ="700" data-aos-easing="ease-in-out" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4 order-md-2">
                    <img src={CardImage2} className="img-fluid rounded-start" alt="..."style={{objectFit: 'cover',height: '100%'}}/>
                </div>
                <div className="col-md-8 order-md-1 p-3">
                    <div className="card-body">
                        <h5 className="card-title font-style-p4">🎉 Mega Discount </h5>
                         <p className="card-text font-style-p5">Big brands, low prices – only this week!
Grab your favorite outfits now and save more.</p>
                     </div>
                 </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Card