import "./HeroBase.css"

export default function HeroBase({tipo, titulo, bg, conteudo}){
    return(
        <>
        {tipo === "componente" ? (conteudo) : (<section className="banner" style={{backgroundImage:`url(${bg})` }}><h2 className="banner__titulo">{titulo}</h2></section>)}
        </>
    )
}