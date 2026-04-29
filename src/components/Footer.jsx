import Member from "./Member";
import Info from "./Info";
import Cta from "./Cta";

function Footer() {
    const membershipList = [
        { url: "/img/buy-comics-digital-comics.png", text: "Digital Comics" },
        { url: "/img/buy-comics-merchandise.png", text: "DC Merchandise" },
        { url: "/img/buy-comics-subscriptions.png", text: "Subscription" },
        { url: "/img/buy-comics-shop-locator.png", text: "Comic Shop Locator" },
        { url: "/img/buy-dc-power-visa.svg", text: "DC Power Visa" }
    ];

    return <>
        <Member member={membershipList} />
        <Info />
        <Cta />
    </>
}


export default Footer;