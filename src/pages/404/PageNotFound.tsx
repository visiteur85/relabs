import style from './404.module.css'

export const PageNotFound = () => {
    return (
        <div className={style.notFound}>
            <div>
            <h1>404</h1>
            <p>Страница не найдена</p>
            </div>
        </div>
    );
};