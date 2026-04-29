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
    const socialLinks = [
        {
            id: 1,
            url: "/img/footer-facebook.png",
            social: "Facebook"
        },
        {
            id: 2,
            url: "/img/footer-twitter.png",
            social: "Twitter"
        },
        {
            id: 3,
            url: "/img/footer-youtube.png",
            social: "YouTube"
        },
        {
            id: 4,
            url: "/img/footer-pinterest.png",
            social: "Pinterest"
        },
        {
            id: 5,
            url: "/img/footer-periscope.png",
            social: "Periscope"
        }
    ];

    return <>
        <Member member={membershipList} />
        <Info/>
        <Cta socialLinks={socialLinks} />
    </>
}




export default Footer;