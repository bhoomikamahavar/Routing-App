import React from 'react'

const Register = () => {
  return (
    <div className="container py-5">
        <div className="row g-5 align-items-start mb-5">
            <div className="col-lg-7">
                <h2 className="fw-bold text-dark mb-3">
                    Manage Projects with Ease-{""}
                    <span className="text-success">ProManage</span>
                    <p className="text-muted fs-5 mb-4 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati cum expedita ipsam! Quibusdam quos natus adipisci excepturi libero dolorem!
                    </p>
                    <p className="text-muted fs-5 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati cum expedita ipsam! Quibusdam quos natus adipisci excepturi libero dolorem!
                    </p>
                    <p className="text-muted fs-5 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati cum expedita ipsam! Quibusdam quos natus adipisci excepturi libero dolorem!
                    </p>
                    <p className="text-muted fs-5 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati cum expedita ipsam! Quibusdam quos natus adipisci excepturi libero dolorem!
                    </p>
                    <div className="d-flex gap-3 mt-5">
                        <button className="btn btn-outline-success px-4 py-2">Learn More</button>
                        <button className="btn btn-success px-4 py-2">Start Now</button>
                    </div>
                </h2>
            </div>
            <div className="col-lg-5">
                <div className="p-4 border rounded shadow-sm bg-white">
                    <h4 className="text-center fw-bold mb-4">Register Now</h4>
                    <form action="">
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Full Name</label>
                            <input type="text" className="form-control form-control-lg" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Email</label>
                            <input type="email" className="form-control form-control-lg" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Phone</label>
                            <input type="number" className="form-control form-control-lg" />
                        </div>   
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Select Plan</label>
                            <select name="" id="" className="form-select form-select-lg">
                                <option>Free Plan</option>
                                <option>Pro Plan</option>
                                <option>Enter Plan</option>
                            </select>
                        </div>   
                        <button className="btn btn-success w-100 py-2 fs-5">Register Now</button>                     
                    </form>
                </div>
            </div>
        </div>
        <div className="text-center mb-4">
            <h3 className="fw-bold mb-3">Unlock Your Project Power</h3>
            <p className="text-muted fs-6 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusantium.</p>
        </div>
        <div className="row g-4">
            <div className="col-md-3">
                <div className="card h-100 shadow-sm p-2">
                    <img src="https://plus.unsplash.com/premium_photo-1661367947678-e61a5a019eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Smart Planning" className="card-img-top" />
                    <div className="card-body">
                        <h6 className="fw-bold mb-1">Smart Planning</h6>
                        <p className="text-muted small mb-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100 shadow-sm p-2">
                    <img src="https://images.unsplash.com/photo-1623303647440-967d26b95b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3JlYXRpdmUlMjBCb2FyZHxlbnwwfHwwfHx8MA%3D%3D" alt="Creative Board" className="card-img-top" />
                    <div className="card-body">
                        <h6 className="fw-bold mb-1">Creative Board</h6>
                        <p className="text-muted small mb-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100 shadow-sm p-2">
                    <img src="https://images.unsplash.com/photo-1623303647440-967d26b95b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3JlYXRpdmUlMjBCb2FyZHxlbnwwfHwwfHx8MA%3D%3D" alt="Creative Board" className="card-img-top" />
                    <div className="card-body">
                        <h6 className="fw-bold mb-1">Collaboration</h6>
                        <p className="text-muted small mb-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100 shadow-sm p-2">
                    <img src="https://plus.unsplash.com/premium_photo-1726666269043-fb16e54646d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBTdXBwb3J0fGVufDB8fDB8fHww" alt="Creative Board" className="card-img-top" />
                    <div className="card-body">
                        <h6 className="fw-bold mb-1">AI Support</h6>
                        <p className="text-muted small mb-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register