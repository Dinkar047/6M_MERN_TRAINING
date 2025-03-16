export default function Courses() {
    return
    <>

        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
                href="index.html"
                className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
                <h2 className="m-0 text-primary">
                    <i className="fa fa-book me-3" />
                    eLEARNING
                </h2>
            </a>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link">
                        Home
                    </a>
                    <a href="about.html" className="nav-item nav-link">
                        About
                    </a>
                    <a href="courses.html" className="nav-item nav-link active">
                        Courses
                    </a>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </a>
                        <div className="dropdown-menu fade-down m-0">
                            <a href="team.html" className="dropdown-item">
                                Our Team
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Testimonial
                            </a>
                            <a href="404.html" className="dropdown-item">
                                404 Page
                            </a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">
                        Contact
                    </a>
                </div>
                <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                    Join Now
                    <i className="fa fa-arrow-right ms-3" />
                </a>
            </div>
        </nav>
        {/* Navbar End */}
        {/* Header Start */}
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item text-white active"
                                    aria-current="page"
                                >
                                    Courses
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* Header End */}
        {/* Categories Start */}
        <div className="container-xxl py-5 category">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">
                        Categories
                    </h6>
                    <h1 className="mb-5">Courses Categories</h1>
                </div>
                <div className="row g-3">
                    <div className="col-lg-7 col-md-6">
                        <div className="row g-3">
                            <div
                                className="col-lg-12 col-md-12 wow zoomIn"
                                data-wow-delay="0.1s"
                            >
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                                    <div
                                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                                        style={{ margin: 1 }}
                                    >
                                        <h5 className="m-0">Web Design</h5>
                                        <small className="text-primary">49 Courses</small>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="col-lg-6 col-md-12 wow zoomIn"
                                data-wow-delay="0.3s"
                            >
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                                    <div
                                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                                        style={{ margin: 1 }}
                                    >
                                        <h5 className="m-0">Graphic Design</h5>
                                        <small className="text-primary">49 Courses</small>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="col-lg-6 col-md-12 wow zoomIn"
                                data-wow-delay="0.5s"
                            >
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                                    <div
                                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                                        style={{ margin: 1 }}
                                    >
                                        <h5 className="m-0">Video Editing</h5>
                                        <small className="text-primary">49 Courses</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-5 col-md-6 wow zoomIn"
                        data-wow-delay="0.7s"
                        style={{ minHeight: 350 }}
                    >
                        <a
                            className="position-relative d-block h-100 overflow-hidden"
                            href=""
                        >
                            <img
                                className="img-fluid position-absolute w-100 h-100"
                                src="img/cat-4.jpg"
                                alt=""
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                                style={{ margin: 1 }}
                            >
                                <h5 className="m-0">Online Marketing</h5>
                                <small className="text-primary">49 Courses</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Categories Start */}
        {/* Courses Start */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">
                        Courses
                    </h6>
                    <h1 className="mb-5">Popular Courses</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a
                                        href="#"
                                        className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                        style={{ borderRadius: "30px 0 0 30px" }}
                                    >
                                        Read More
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                        style={{ borderRadius: "0 30px 30px 0" }}
                                    >
                                        Join Now
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">
                                    Web Design &amp; Development Course for Beginners
                                </h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-user-tie text-primary me-2" />
                                    John Doe
                                </small>
                                <small className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-clock text-primary me-2" />
                                    1.49 Hrs
                                </small>
                                <small className="flex-fill text-center py-2">
                                    <i className="fa fa-user text-primary me-2" />
                                    30 Students
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-2.jpg" alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a
                                        href="#"
                                        className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                        style={{ borderRadius: "30px 0 0 30px" }}
                                    >
                                        Read More
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                        style={{ borderRadius: "0 30px 30px 0" }}
                                    >
                                        Join Now
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">
                                    Web Design &amp; Development Course for Beginners
                                </h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-user-tie text-primary me-2" />
                                    John Doe
                                </small>
                                <small className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-clock text-primary me-2" />
                                    1.49 Hrs
                                </small>
                                <small className="flex-fill text-center py-2">
                                    <i className="fa fa-user text-primary me-2" />
                                    30 Students
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-3.jpg" alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a
                                        href="#"
                                        className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                        style={{ borderRadius: "30px 0 0 30px" }}
                                    >
                                        Read More
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                        style={{ borderRadius: "0 30px 30px 0" }}
                                    >
                                        Join Now
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">
                                    Web Design &amp; Development Course for Beginners
                                </h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-user-tie text-primary me-2" />
                                    John Doe
                                </small>
                                <small className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-clock text-primary me-2" />
                                    1.49 Hrs
                                </small>
                                <small className="flex-fill text-center py-2">
                                    <i className="fa fa-user text-primary me-2" />
                                    30 Students
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Courses End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">
                        Testimonial
                    </h6>
                    <h1 className="mb-5">Our Students Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item text-center">
                        <img
                            className="border rounded-circle p-2 mx-auto mb-3"
                            src="img/testimonial-1.jpg"
                            style={{ width: 80, height: 80 }}
                        />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img
                            className="border rounded-circle p-2 mx-auto mb-3"
                            src="img/testimonial-2.jpg"
                            style={{ width: 80, height: 80 }}
                        />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img
                            className="border rounded-circle p-2 mx-auto mb-3"
                            src="img/testimonial-3.jpg"
                            style={{ width: 80, height: 80 }}
                        />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img
                            className="border rounded-circle p-2 mx-auto mb-3"
                            src="img/testimonial-4.jpg"
                            style={{ width: 80, height: 80 }}
                        />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Testimonial End */}
        {/* Footer Start */}
        <div
            className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Quick Link</h4>
                        <a className="btn btn-link" href="">
                            About Us
                        </a>
                        <a className="btn btn-link" href="">
                            Contact Us
                        </a>
                        <a className="btn btn-link" href="">
                            Privacy Policy
                        </a>
                        <a className="btn btn-link" href="">
                            Terms &amp; Condition
                        </a>
                        <a className="btn btn-link" href="">
                            FAQs &amp; Help
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3" />
                            123 Street, New York, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt me-3" />
                            +012 345 67890
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3" />
                            info@example.com
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src="img/course-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src="img/course-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src="img/course-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src="img/course-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src="img/course-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid bg-light p-1"
                                    src="img/course-1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                            <input
                                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ©{" "}
                            <a className="border-bottom" href="#">
                                Your Site Name
                            </a>
                            , All Right Reserved.
                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                            Designed By{" "}
                            <a className="border-bottom" href="https://htmlcodex.com">
                                HTML Codex
                            </a>
                            <br />
                            <br />
                            Distributed By{" "}
                            <a className="border-bottom" href="https://themewagon.com">
                                ThemeWagon
                            </a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i className="bi bi-arrow-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}


    </>
}