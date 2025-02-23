import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IPageBorderWidthProps extends IAdminComponentsProps {
    type: string;
    name: string;
    id: string;
    value: string | number;
    checked: boolean;
    required: boolean;
    readonly: boolean;
    inputClass: string
    cardBorder: boolean;
    min: number
}

const PageBorderWidth: React.FC<IPageBorderWidthProps> = ({
                                                                      onChangeHandler,
                                                                      type,
                                                                      id,
                                                                      value,
                                                                      inputClass,
                                                                      name,
                                                                      required,
                                                                      readonly,
                                                                      checked,
                                                                      cardBorder,
                                                                      min
                                                                  }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: cardBorder ? 'flex' : 'none'}}>
            <label htmlFor="cardBorderColor">Цвет границы карточки товара/услуги</label>
            <AdminInput
                type={type}
                name={name}
                id={id}
                value={value}
                checked={checked}
                min={min}
                onChangeHandler={onChangeHandler}
                required={required}
                readonly={readonly}
                classname={inputClass}/>
        </div>
    );
};

export default PageBorderWidth;
