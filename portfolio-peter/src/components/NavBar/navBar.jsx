import PeterEmPixel from "../../imgs/PeterEmPixel.png"
import Image from 'next/image'
import styled from "./header.module.css"

export default function NavBar() {
    return(
        <>
        <header className={styled.header}>
            <div className={styled.div}>
            <Image className={styled.foto} 
                src={PeterEmPixel}
                width={120}
                height={100}
            />
            <ul className={styled.menu}>
                <li className={styled.text}>Peter</li>
                <li className={styled.text}>Webs</li>
                <li className={styled.text}>Social</li>
            </ul>
            </div>
        </header>
        <h1 className={styled.aviso}>Site indisponível pra esse tipo de tela!</h1>
        </>
    )
}