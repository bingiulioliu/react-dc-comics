import style from './Content.module.css'




function Content({comics}) {

    const comicsJsx = comics.map(comic =>{
        const { id, title, thumb } = comic;
        const cleanTitle = title.split('#')[0].trim();
        return (
            <div key={id} className={`${style.comicCont} col-6 col-md-4 col-lg-2`} >
                <img className={`${style.comicImg} img-fluid`} src={thumb} alt={title} />
                <span className={style.comicTitle}>{cleanTitle.toUpperCase()}</span>
            </div>
        )
    });
    return <div className={` bg-dark ${style.content}`}>
                <div className={style.jumbotronWrapper}>
                    <img className={`${style.jumboImg} img-fluid w-100`} src="./img/jumbotron.jpg" alt="" />
                </div>

                <div className='container position-relative mt-5'>
                    <div>
                        <button className={style.btnSeries}>CURRENT SERIES</button>
                    </div>
                    <div className='row g-4'>
                        {comicsJsx}
                    </div>
                    <div className='text-center'>
                        <button className={style.btnLoadMore}>LOAD MORE</button>
                    </div>
                </div>
            </div>
}

export default Content;