import style from './Content.module.css'
import comics from './data/comics';



function Content() {
    let jsxComicsList = [];
    return <div className={`bg-dark ${style.content}`}>
                <div className={style.jumbotronWrapper}>
                    <img className={`${style.jumboImg} img-fluid w-100`} src="./img/jumbotron.jpg" alt="" />
                <div>

                <div className='container position-relative'>
                    <button className={style.btnSeries}>CURRENT SERIES</button>
                    <div className='row'>

                    </div>
                    <div className='text-center'>
                        <button className={style.btnLoadMore}>LOAD MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Content;