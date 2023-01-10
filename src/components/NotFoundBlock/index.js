import React from 'react';
import styles from './NotFoundBlock.module.scss'

console.log(styles)

function NotFoundBlock(props) {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br/>
                Ничего не найдено :(
            </h1>
            <p className={styles.description}>Nothing...</p>
        </div>
    );
}

export default NotFoundBlock;