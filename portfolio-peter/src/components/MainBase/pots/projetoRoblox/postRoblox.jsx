import styled from "./postsRoblox.module.css"
import Image from "next/image"
import tumbRoblox from "../../../../imgs/PerfilRoblox.jpg"


export default function PostRoblox() {
    
    return (
        <div className={styled.divPost}>
            <div className={styled.PostRoblox}>
                <h2>Projeto Roblox</h2>
                <Image src={tumbRoblox} alt="Parte Roblox" width={800}/>
                <h4 style={{marginTop: "15px"}}>Insanity Game</h4>
                <p className={styled.p}>Este jogo oferece uma experiência intensa e aterrorizante, onde o parkour é a única maneira de escapar das ameaças mortais que habitam a caverna. Com uma atmosfera opressiva, sustos inesperados e uma narrativa sinistra, este jogo o desafiará a enfrentar seus medos mais profundos enquanto luta para sobreviver nas profundezas do abismo.</p>
            </div>
        </div>
    )
}