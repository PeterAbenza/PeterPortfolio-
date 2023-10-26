import styled from "./main.module.css"
import PostBase from "./pots/projetoRoblox/postRoblox"
import MenuWindows from "../../components/MenuWindows/menuWindows"
import SobreMim from "../../components/MainBase/pots/Apresentacao/apresentacao"



export default function MainBase() {
    
    return (
        <main className={styled.main}>
            <div className={styled.tela}>
                <div className={styled.RodBar}>
                    <h1>WebFlow</h1>
                </div>
                <div className={styled.rolagem}>
                    
                </div>
                
            </div>
        </main>
    )
}