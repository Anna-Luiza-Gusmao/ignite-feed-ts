import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

/*Método de desestruturação*/
export function Avatar({ hasBorder = true, ...props }: AvatarProps){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}

/*export function Avatar(props){
    const hasBorder = props.hasBorder != false;

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={props.src} 
        />
    );
}*/