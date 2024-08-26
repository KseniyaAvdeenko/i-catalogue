import React from 'react';
import styles from "../AdminMain.module.sass";

interface IHeaderContactsFontColorProps {
    isLoading: boolean;
    onChangeHandler: Function;
    contactsFontSize: number | undefined
}

const HeaderContactsFontColor: React.FC<IHeaderContactsFontColorProps> = ({
                                                                              isLoading,
                                                                              contactsFontSize,
                                                                              onChangeHandler
                                                                          }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="contactsFontSize">Размер шрифта контактов</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={contactsFontSize}
                   name={'contactsFontSize'}
                   id={'contactsFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderContactsFontColor;