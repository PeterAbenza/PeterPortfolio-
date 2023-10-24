import Styles from "./projeto.module.css"
import Folders from "../../imgs/folder.png"
import Image from "next/image"

export default function Projetos() {
    return (
        <div className={Styles.Pp}>
            <h1>Meus Projetos</h1>

        <div className={Styles.ProjetosTela}>
            <div className={Styles.Projetos}>
                <Image src={Folders} width={80} height={80}/>
                <h5>Projeto Roblox</h5>
            </div>

            <div className={Styles.Projetos}>
                <Image src={Folders} width={80} height={80}/>
                <h5>Projeto Final Curso</h5>
            </div>
        </div>
        </div>
    )
}