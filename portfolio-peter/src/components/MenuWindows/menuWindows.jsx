import styled from "./menuWindows.module.css"
import Image from "next/image"
import Link from "next/link"
import Folder from "../../imgs/folder.png"
import Lixeira from "../../imgs/lixeira.png"
import BlocoNotas from "../../imgs/Logo_Bloco_de_Notas-pt.png"
import Redes from "../../imgs/Redes.png"
import projetos from "../../app/projetos/page"


export default function MenuWindows() {
    
    return (
        <div className={styled.menuMain}>
            <div className={styled.menus}>
                <Link className={styled.Links} href="/projetos">
                <Image src={Folder} alt="Pasta" width={80} height={80} />
                <h3>Projetos</h3>
                </Link>
            </div>
            <div className={styled.menus}>
                <Image src={BlocoNotas} alt="Pasta" width={80} height={80}/>
                <h3>Sobre Mim</h3>
            </div>
            <div className={styled.menus}>
                <Image src={Redes} alt="Pasta" width={80} height={80}/>
                <h3>Rede Socias</h3>
            </div>
            <div className={styled.menus}>
                <Image src={Lixeira} alt="Pasta" width={150} height={150}/>
                <h3>Lixeira</h3>
            </div>
        </div>
    )
}