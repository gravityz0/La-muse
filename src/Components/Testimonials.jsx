import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='container p-4'>
        <span className='text-center d-block p-3 testimonials'>Testimonials</span>
    <div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card shadow">
      <div class="card-body">
        <span class="card-text quote">“</span>
        <h5 class="card-title names text-center lh-lg">Ariella Linda</h5>
        <p class="card-text p-3 paragraph">Customer service was sooo kind and helpful with sizing. I felt like a VIP. The package even smelled amazing!</p>
        <span class="card-text quote" style={{float: 'right'}}>”</span>
      </div>
    </div>
  </div>

   <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title quote">“</h5>
        <h5 class="card-title names text-center lh-lg">Belinda K</h5>
        <p class="card-text p-3 paragraph">I’ve been following the brand since launch the exclusive orders feel so luxe and personal. Keep slaying, queen!</p>
        <span class="card-text quote" style={{float: 'right'}}>”</span>
      </div>
    </div>
  </div>


  <div class="col-sm-4">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title quote">“</h5>
        <h5 class="card-title text-center names lh-lg">Harmony R</h5>
        <p class="card-text p-3 paragraph">I’ve never felt this confident in a dress. The fit was perfect, and the quality? Chef’s kiss! I’m officially obsessed.”</p>
        <span class="card-text quote" style={{float: 'right'}}>”</span>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Testimonials