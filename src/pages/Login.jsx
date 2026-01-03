import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <div className="row w-100 shadow rounded overflow-hidden" style={{ maxWidth: "900px" }}>
                    <div className="col-md-4 bg-light d-flex flex-column align-items-center justify-content-center p-4">
                        <img src="https://media.istockphoto.com/id/2253923342/photo/3d-computer-with-a-password-login-screen-icon-minimal-security-system-user-authentication.webp?a=1&b=1&s=612x612&w=0&k=20&c=qS7dPJKC5p9jPCQurajKA2SmyCBAtk4S_YJVoDFacPk=" alt="vector login" className="img-fluid mb-3" style={{ maxWidth: "200px" }} />
                        <h5 className="fw-bold text-center">Secure Login</h5>
                        <p className="text-muted text-center small">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-4 bg-white p-4">
                        <h4 className="fw-bold mb-3 text-center text-success">Login</h4>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label fw-bold">Username *</label>
                            <input type="text" className="form-control" placeholder="Enter Your Username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label fw-bold">Password *</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label htmlFor="remember" className="form-check-label">Remember Me</label>
                        </div>
                        <button className="btn text-white w-100 bg-success">Login</button>
                    </div>
                    <div className="col-md-4 bg-light p-4 d-flex flex-column justify-content-center">
                        <div className="text-center mb-3">
                            <a href="#" className="text-success text-decoration-none fw-bold">Forgot Password?</a>
                        </div>
                        <div className="text-center mb-3">
                            <a href="#" className="text-success text-decoration-none fw-bold">Create New Account</a>
                        </div>
                        <div className="text-center">
                            <p className="small text-muted">&copy; 2026 ProManage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login