import styled from "./main.module.css"
import Image from "next/image"
import PostBase from "./pots/projetoRoblox/postRoblox"
import MenuWindows from "../../components/MenuWindows/menuWindows"
import Projetos from "../../app/projetos/page"



export default function MainBase() {
    
    return (
        <main className={styled.main}>
            <div className={styled.tela}>
                <div className={styled.rolagem}>
                <Projetos/>
                </div>
            </div>
            <MenuWindows/>
        </main>
    )
}