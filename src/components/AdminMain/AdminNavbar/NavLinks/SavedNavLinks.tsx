import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../AdminNavbar.module.sass";
import NavLinkInput from "./NavLinkInput";
import CorrespondingPageNameInput from "./CorrespondingPageNameInput";
import DeleteIcon from "../../../../assets/img/deleteIcon.png";
import {IPageSetting} from "../../../../interface/IPagesSettings";
import Label from "../Label";
import Input from "../Input";

interface ISaveNavLinksProps {
    isLoading: boolean;
    pages: IPageSetting[] | null
    deleteNavLink: Function
}

const SavedNavLinks: React.FC<ISaveNavLinksProps> = ({isLoading, deleteNavLink, pages}) => {
    return (
        <div className={styles.savedItems}>
            {isLoading && 'Loading...'}
            {pages && pages.map(page => (
                <div key={page.id} className={styles.savedItems__items}>
                    <div className={styles.savedItems__item}>
                        <label htmlFor={'navLink*' + page.slug}
                               className={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}>
                            Навигационная ссылка
                        </label>
                        <input
                            type={'text'}
                            name={'navLink'}
                            id={'navLink*' + page.slug}
                            value={page.link.navLink}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles.savedItems__item}>
                        <label htmlFor={'correspondingPageName*' + page.slug}
                               className={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}>
                            Ссылка на соответствующую страницу
                        </label>
                        <input
                            type={'text'}
                            name={'correspondingPageName'}
                            id={'navLink*' + page.slug}
                            value={page.slug}
                            readOnly={true}
                        />
                    </div>
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteNavLink(page.slug)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedNavLinks;