import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='container p-4' id="testimonials">
        <span className='text-center d-block p-3 testimonials'>Testimonials</span>
    <div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0" data-aos = "flip-up" data-aos-delay="300" data-aos-easing="ease-in-out">
    <div className="card shadow custom-card">
      <div className="card-body">
        <span className="card-text quote">“</span>
        <h5 className="card-title names text-center lh-lg">Ariella Linda</h5>
        <p className="card-text p-3 paragraph">Customer service was sooo kind and helpful with sizing. I felt like a VIP. The package even smelled amazing!</p>
        <span className="card-text quote" style={{float: 'right'}}>”</span>
      </div>
    </div>
  </div>

   <div className="col-sm-4 mb-3 mb-sm-0" data-aos = "flip-up" data-aos-delay="500" data-aos-easing="ease-in-out">
    <div className="card shadow custom-card">
      <div className="card-body">
        <h5 className="card-title quote">“</h5>
        <h5 className="card-title names text-center lh-lg">Belinda K</h5>
        <p className="card-text p-3 paragraph">I’ve been following the brand since launch the exclusive orders feel so luxe and personal. Keep slaying, queen!</p>
        <span className="card-text quote" style={{float: 'right'}}>”</span>
      </div>
    </div>
  </div>


  <div className="col-sm-4" data-aos = "flip-up" data-aos-delay="700" data-aos-easing="ease-in-out" >
    <div className="card shadow custom-card">
      <div className="card-body">
        <h5 className="card-title quote">“</h5>
        <h5 className="card-title text-center names lh-lg">Harmony R</h5>
        <p className="card-text p-3 paragraph">I’ve never felt this confident in a dress. The fit was perfect, and the quality? Chef’s kiss! I’m officially obsessed.”</p>
        <span className="card-text quote" style={{float: 'right'}}>”</span>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Testimonials