import style from './Content.module.css'

function Cta() {
    return <>
        <section className="bg-dark py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <button className="btn btn-outline-primary text-white border-primary rounded-0 fw-bold px-3 py-2">
                        SIGN-UP NOW!
                    </button>
                </div>

                <div className="d-flex align-items-center">
                    <h5 className="text-primary fw-bold mb-0 me-4">FOLLOW US</h5>
                    <div className="d-flex align-items-center">
                        <img src="/img/footer-facebook.png" alt="" className="me-3"/>
                        <img src="/img/footer-twitter.png" alt="" className="me-3"/>
                        <img src="/img/footer-youtube.png" alt="" className="me-3"/>
                        <img src="/img/footer-pinterest.png" alt="" className="me-3"/>
                        <img src="/img/footer-periscope.png" alt="" />
                    </div>
                </div>

            </div>
        </section>
    </>
}


export default Cta;