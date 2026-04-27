import style from './Content.module.css'

function Content() {
    return <div className={`bg-dark d-flex align-items-center justify-content-center ${style.content}`}>
        <h3 class="text-light">--&gt; Content goes here &lt;--</h3>
    </div>

}

export default Content;