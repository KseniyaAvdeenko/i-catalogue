import React from 'react';
import styles from "../AdminMain.module.sass";

interface IHeaderBorderBottomProps {
    isLoading: boolean;
    onChangeHandler: Function;
    headerBorderBottom: boolean
}

const HeaderBorderBottom: React.FC<IHeaderBorderBottomProps> = ({
                                                                    headerBorderBottom, isLoading,
                                                                    onChangeHandler
                                                                }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headerBottomBorder">Нижняя граница “шапки” сайта</label>
            {isLoading && 'Loading...'}
            <input type="checkbox"
                   checked={headerBorderBottom}
                   name={'headerBottomBorder'}
                   id={'headerBottomBorder'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderBorderBottom;