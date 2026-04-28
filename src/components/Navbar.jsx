
function Navbar() {
    const navList = ['Characters', 'Comics', 'Movies', 'Tv', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop'];
    let jsxNavList = [];

    // Ciclo for per stendere la lista 
    for (let i = 0; i < navList.length; i++) {
        const tempList = navList[i].toUpperCase();
        jsxNavList.push(<li class="nav-item">
            <a className="nav-link " aria-current="page" href="#">{tempList}</a>
        </li>)
    }

    return <navbar>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <img src="/img/dc-logo.png" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {jsxNavList}
                        {/*
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">CHARACTERS</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link active" href="#">COMICS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MOVIES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">GAMES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">COLLECTIBLES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">VIDEOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FANS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">NEWS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SHOP</a>
                        </li>
                        */}
                    </ul>
                </div>
            </div>
        </nav>
    </navbar>;
}

export default Navbar;