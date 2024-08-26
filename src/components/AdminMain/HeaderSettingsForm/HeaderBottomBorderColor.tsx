import React from 'react';
import styles from "../AdminMain.module.sass";

interface IHeaderBottomBorderColorProps {
    isLoading: boolean;
    onChangeHandler: Function;
    headerBottomBorderColor: string | undefined;
    headerBorderBottom: boolean
}

const HeaderBottomBorderColor: React.FC<IHeaderBottomBorderColorProps> = ({
                                                                              isLoading, headerBottomBorderColor,
                                                                              onChangeHandler, headerBorderBottom
                                                                          }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: headerBorderBottom?'flex':'none'}}>
            <label htmlFor="headerBottomBorderColor">Цвет нижней границы “шапки” сайта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={headerBottomBorderColor}
                   name={'headerBottomBorderColor'}
                   id={'headerBottomBorderColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderBottomBorderColor;
