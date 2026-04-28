import style from './Content.module.css'

function Content() {
    return <div className={`bg-dark d-flex align-items-center justify-content-center ${style.content}`}>
        <img className={`${style.jumboImg} img-fluid w-100`} src="./img/jumbotron.jpg" alt="" />
        
    </div>

}

export default Content;