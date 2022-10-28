import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css"

export function Sidebar (){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/87679298?s=400&u=eee5a9ce7f86217c20bc58c8d8ab8afe60f15b00&v=4" 
                />
                <strong>Anna Gusmão</strong>
                <span>Front-End Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}