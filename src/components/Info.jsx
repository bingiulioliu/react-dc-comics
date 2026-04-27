import style from './Content.module.css'

function Info() {
    return <>
        <section className={style.infoFooter}>
            <div className="container py-5">
                <div className={`row ${style.contentRow}`}>

                    {/* Prima Colonna: DC COMICS e SHOP */}
                    <div className="col-auto me-4">
                        <h5 className={`${style.listTitle} text-light`}>DC Comics</h5>
                        <ul className="list-unstyled">
                            <li className={`text-secondary`}>Characters</li>
                            <li className={`text-secondary`}>Comics</li>
                            <li className={`text-secondary`}>Movies</li>
                            <li className={`text-secondary`}>TV</li>
                            <li className={`text-secondary`}>Games</li>
                            <li className={`text-secondary`}>Videos</li>
                            <li className={`text-secondary`}>News</li>
                        </ul>

                        <h5 className={`${style.listTitle} text-light mt-4`}>Shop</h5>
                        <ul className="list-unstyled">
                            <li className={`text-secondary`}>Shop DC</li>
                            <li className={`text-secondary`}>Shop DC Collectibles</li>
                        </ul>
                    </div>

                    {/* Seconda Colonna: DC */}
                    <div className="col-auto me-4">
                        <h5 className={`${style.listTitle} text-light`}>DC</h5>
                        <ul className="list-unstyled">
                            <li className={`text-secondary`}>Terms Of Use</li>
                            <li className={`text-secondary`}>Privacy policy (New)</li>
                            <li className={`text-secondary`}>Ad Choices</li>
                            <li className={`text-secondary`}>Advertising</li>
                            <li className={`text-secondary`}>Jobs</li>
                            <li className={`text-secondary`}>Subscriptions</li>
                            <li className={`text-secondary`}>Talent Workshops</li>
                            <li className={`text-secondary`}>CPSC Certificates</li>
                            <li className={`text-secondary`}>Ratings</li>
                            <li className={`text-secondary`}>Shop Help</li>
                            <li className={`text-secondary`}>Contact Us</li>
                        </ul>
                    </div>

                    {/* Terza Colonna: SITES */}
                    <div className="col-auto">
                        <h5 className={`${style.listTitle} text-light`}>Sites</h5>
                        <ul className="list-unstyled">
                            <li className={`text-secondary`}>DC</li>
                            <li className={`text-secondary`}>MAD Magazine</li>
                            <li className={`text-secondary`}>DC Kids</li>
                            <li className={`text-secondary`}>DC Universe</li>
                            <li className={`text-secondary`}>DC Power Visa</li>
                        </ul>
                    </div>

                </div>
                <img src="/img/dc-logo-bg.png" alt="" className={style.dcLogo}/>
            </div>
        </section>
    </>
}

export default Info;