import React from 'react'

const Service = () => {
  return (
    <div>
        <section className="py-5 text-center text-white position-relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605719882363-7273d12654dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D')", backgroundSize: "cover", backgroundPosition: "center", height: "450px", filter: "brightness(60%)"}}>
            <h1 className="fw-bold display-6 mt-5">Our Services</h1>
        </section>
        <div className="container position-relative" style={{marginTop: "-120px"}}>
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-3 mb-4">
                    <div className="card border-0 shadow-lg p-3 text-center rounded-4">
                        <i class="bi bi-bicycle fs-1 text-success"></i>
                        <h5 className="fw-bold mt-3">WorkOuts</h5>
                        <p className="text-muted" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, mollitia.</p>
                        <a href="#" className="fw-bold text-success">More</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 mb-4">
                    <div className="card border-0 shadow-lg p-3 text-center rounded-4">
                        <i class="bi bi-people fs-1 text-success"></i>
                        <h5 className="fw-bold mt-3">WorkOuts</h5>
                        <p className="text-muted" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, mollitia.</p>
                        <a href="#" className="fw-bold text-success">More</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 mb-4">
                    <div className="card border-0 shadow-lg p-3 text-center rounded-4">
                        <i class="bi bi-award fs-1 text-success"></i>
                        <h5 className="fw-bold mt-3">Membership</h5>
                        <p className="text-muted" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, mollitia.</p>
                        <a href="#" className="fw-bold text-success">More</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 mb-4">
                    <div className="card border-0 shadow-lg p-3 text-center rounded-4">
                        <i class="bi bi-calendar fs-1 text-success"></i>
                        <h5 className="fw-bold mt-3">Events</h5>
                        <p className="text-muted" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, mollitia.</p>
                        <a href="#" className="fw-bold text-success">More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service