import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/esm/locale/pt-BR/index.js"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post ({ author, publishedAt, content }:PostProps){
    //useState principal que armazena todos os comentários
    const [comments, setComments] = useState([
        "Post muito legal!!!"
    ])

    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
        //const newContentText = event.target.content.value;
        setComments([...comments, newCommentText]);
        setNewCommentText("")
        //event.target.content.value = "";
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatório") //Altera a mensagem do campo obrigatório para preenchimento
    }

    function onDeleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder //true
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type == 'paragraph'){
                        return <p key={item.content}>{item.content}</p>
                    }else if (item.type == 'link'){
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="content"
                    placeholder="Escreva um comentário..." 
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            deleteComment={onDeleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}