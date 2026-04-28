import style from './Content.module.css'

function Member() {

    const membershipList = [
        {
            url: "/img/buy-comics-digital-comics.png",
            text: "Digital Comics"
        },
        {
            url: "/img/buy-comics-merchandise.png",
            text: "DC Merchandise"
        },
        {
            url: "/img/buy-comics-subscriptions.png",
            text: "Subscription"
        },
        {
            url: "/img/buy-comics-shop-locator.png",
            text: "Comic Shop Locator"
        },
        {
            url: "/img/buy-dc-power-visa.svg",
            text: "DC Power Visa"
        }
    ];

    const membershipListJsx = membershipList.map(member =>{
        const {url, text} = member;
        return <li className="d-flex align-items-center">
                    <img src={url} alt={text} className={style.memberIcon} />
                    <span className="text-white ms-2 text-uppercase">{text}</span>
                </li>
    });

    return <section className="bg-primary py-4">
        <div className="container">
            <ul className="d-flex justify-content-center align-items-center list-unstyled m-0 gap-3">
                {membershipListJsx}
                {/*
                <li className="d-flex align-items-center">
                    <img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" className={style.memberIcon} />
                    <span className="text-white ms-2 text-uppercase">Digital Comics</span>
                </li>

                <li className="d-flex align-items-center">
                    <img src="/img/buy-comics-merchandise.png" alt="Merchandise" className={style.memberIcon} />
                    <span className="text-white ms-2 text-uppercase" >DC Merchandise</span>
                </li>

                <li className="d-flex align-items-center">
                    <img src="/img/buy-comics-subscriptions.png" alt="Subscriptions" className={style.memberIcon} />
                    <span className="text-white ms-2 text-uppercase">Subscription</span>
                </li>

                <li className="d-flex align-items-center">
                    <img src="/img/buy-comics-shop-locator.png" alt="Shop Locator" className={style.memberIcon} />
                    <span className="text-white ms-2 text-uppercase">Comic Shop Locator</span>
                </li>

                <li className="d-flex align-items-center">
                    <img src="/img/buy-dc-power-visa.svg" alt="Power Visa" className={style.memberIcon} />
                    <span className="text-white ms-2 text-uppercase">DC Power Visa</span>
                </li>
                */}
            </ul>
        </div>
    </section>
}

export default Member;