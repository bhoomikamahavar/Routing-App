import React from 'react'

const Home = () => {
  return (
    <div className="container-fluid mt-4">
        <header className="text-center d-flex align-items-center justify-content-center" style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
            height: "80vh", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            position: "relative", 
            color: "white"}}>
                <div style={{position: "absolute", 
                    top: 0, 
                    left: 0, 
                    width: "100%", 
                    height: "100%", 
                    backgroundColor: "rgba(0,0,0,0.7)"}}>
                        <div className="container position-relative" style={{zIndex: 2, color: "white"}}>
                            <div className="row py-lg-5">
                                <div className="col-lg-8 col-md-10 mx-auto">
                                    <h1>Manage Project with Ease - ProManage</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam eveniet tenetur iusto sapiente fuga eligendi possimus ex dicta recusandae.</p>
                                    <a href="#" className="btn btn-success me-2">Get Started</a>
                                    <a href="#" className="btn btn-outline-light">Learn More</a>
                                </div>
                            </div>
                        </div>
                </div>
        </header>
        {/* section 2 */}
        <section className="py-5">
            <h2 className="mb-4 text-center">Why Choose us ?</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">Quality</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, non.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">reLiability</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, non.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">Support</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, non.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* section 3 */}
        <section className="text-center py-5 bg-success text-white rounded">
            <h2>get Started Today!</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ullam.</p>
            <a href="/register" className="btn btn-light btn-lg">Register Now</a>
        </section>
    </div>
  )
}

export default Home