import styled from "./posts.module.css"
import Image from "next/image"
import tumbRoblox from "../../../imgs/PerfilRoblox.jpg"


export default function PostBase() {
    
    return (
        <div className={styled.divPost}>
            <div className={styled.PostRoblox}>
                <h2>Projeto Roblox</h2>
                <Image src={tumbRoblox} alt="Parte Roblox" width={800}/>
                <h4 style={{marginTop: "15px"}}>Insanity Game</h4>
                <p className={styled.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, assumenda laboriosam! Corporis enim, modi ipsa quasi fugiat at commodi molestias, aperiam itaque deleniti fugit tenetur. Blanditiis molestiae commodi eos. Consequatur.</p>
            </div>
        </div>
    )
}