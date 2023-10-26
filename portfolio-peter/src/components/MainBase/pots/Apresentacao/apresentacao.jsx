import styled from "./apresentacao.module.css"
import Image from "next/image"
import fotoPeter from "../../../../imgs/fotoPeter.jpeg"


export default function PostSobreMim() {
    
    return (
        <div className={styled.divPost}>
            <h4>Sobre mim</h4>
            <div className={styled.PostSobre}>
                <Image className={styled.ft} src={fotoPeter} alt="Parte Roblox" width={300}/>
                <p className={styled.sobremim}>Sou um apaixonado aspirante a desenvolvedor web com sede de aprendizado e entusiasmo por criar soluções digitais incríveis. Com formação em Gama Academy e um profundo interesse em tecnologia, estou determinado a construir minha carreira neste campo dinâmico. Minha jornada começou com a exploração de linguagens como HTML, CSS e JavaScript, e estou animado para expandir meu conhecimento em frameworks modernos e outras tecnologias essenciais. Sou um solucionador de problemas ávido e estou comprometido em aprimorar minhas habilidades para criar experiências web envolventes e eficazes. Estou ansioso para contribuir com minha paixão e criatividade em equipes de desenvolvimento.</p>
            </div>
            <div className={styled.Competencias}>
            <h4>Competências</h4>
            <p>Html - Css - React - NextJS - JavaScript - Node.js - TypeScript - Git - MongoDB - Express - Lua</p>
            </div>
        </div>
    )
}