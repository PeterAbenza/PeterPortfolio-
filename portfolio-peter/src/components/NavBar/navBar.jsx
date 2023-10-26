import PeterEmPixel from "../../imgs/PeterEmPixel.png"
import Image from 'next/image'
import styled from "./navbar.module.css"

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
        </>
    )
}