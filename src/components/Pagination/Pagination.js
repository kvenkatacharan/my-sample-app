import styles from "./Pagination.module.css"

const Pagination = (props) => {
    let { dataLength, limit, pageHandler } = props
    let pages = []
    for ( let i=0; i<Math.ceil(dataLength/limit); i++) {
        pages.push(i+1)
    }

    return (
            <div className={styles.pagesContainer}>
                    {
                    pages.map(page => <div className={styles.pages} onClick = {() => pageHandler(page)}>{page}</div>)
}
            </div>
    )
}

export default Pagination