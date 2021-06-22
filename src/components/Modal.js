import React from 'react'

const Modal = ({rocket}) => {
    return (
        <div className="modal fade" id={`popup${rocket.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{rocket.name }</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
                    <div className="modal-body">
                        


      <div id={`carousel${rocket.id}Controls`} className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={rocket.flickr_images[0]} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={rocket.flickr_images[1]} class="d-block w-100" alt="..." />
    </div>
    
  </div>
  <a class="carousel-control-prev" href={`#carousel${rocket.id}Controls`} role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href={`#carousel${rocket.id}Controls`} role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


<div className="row rocket-info">
    <div className="col-sm-4 ">
        <h4>Height</h4>
        <p>{rocket.height.feet} Feet</p>
    </div>
    <div className="col-sm-4">
        <h4>Diameter</h4>
        <p>{rocket.diameter.feet} Feet</p>
    </div>
    <div className="col-sm-4">
        <h4>Mass</h4>
        <p>{rocket.mass.kg/1000} Tonne</p>
    </div>
    <div className="col-sm-4">
        <h4>First Flight</h4>
        <p>{rocket.first_flight}</p>
    </div>
    <div className="col-sm-4">
        <h4>Active</h4>
        <p>{rocket.active ? `Yes` : `No`}</p>
    </div>
    <div className="col-sm-4">
        <h4>Cost/Launch</h4>
        <p>{rocket.cost_per_launch/1000000} Million</p>
    </div>
</div>


  <p>{rocket.description}</p>
  <a className="btn btn-primary btn-block" target="_blank" rel="noreferrer" href={rocket.wikipedia}>Learn More on Wikipedia</a>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    )
}

export default Modal
