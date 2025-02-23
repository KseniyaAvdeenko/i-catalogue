import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import {ISidebarContent} from "./AdminSidebarPaths";
import Loader from "../../UI/Loader/Loader";
import {useAppSelector} from "../../../hooks/redux";

interface ISidebarWithoutSubsectionsProps {
    getItemsVisibility: Function;
    sidebarItem: ISidebarContent;
    pagesCondition: boolean;
    editingProdCondition: boolean
}

const SidebarWithoutSubsections: React.FC<ISidebarWithoutSubsectionsProps> = ({
                                                                                  editingProdCondition,
                                                                                  sidebarItem,
                                                                                  getItemsVisibility,
                                                                                  pagesCondition,
                                                                              }) => {
    const {productsReadOnly} = useAppSelector(state => state.productReducer)
    const {pages, isLoading} = useAppSelector(state => state.pageSettingsReducer)

    return pagesCondition ? (
            <div className={styles.Sidebar__items}>
                {isLoading && (<Loader/>)}
                {pages && pages.map(page=>(
                    <NavLink key={page.id} to={'pages_settings/' + page.slug} className={({isActive}) =>
                        [isActive
                            ? [styles.Sidebar__heading, styles.Sidebar__item_margin, styles.linkActive].join(' ')
                            : styles.Sidebar__item, styles.Sidebar__item_margin].join(" ")}> Настройка страницы "{page.navLink}"
                    </NavLink>
                ))}
            </div>)
        : editingProdCondition
            ? (<div className={styles.Sidebar__items}>
                <div className={styles.Sidebar__itemsContainer}
                     style={{display: productsReadOnly && productsReadOnly.length ? 'flex' : 'none'}}
                     onClick={() => getItemsVisibility(sidebarItem.getItemsVisibilitySection)}>
                    <NavLink to={sidebarItem.link} className={({isActive}) =>
                        [isActive
                            ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                            : styles.Sidebar__heading].join(' ')}>
                        {sidebarItem.content}
                    </NavLink>
                </div>
            </div>)
            : (<div className={styles.Sidebar__items}>
                <div className={styles.Sidebar__itemsContainer}
                     onClick={() => getItemsVisibility(sidebarItem.getItemsVisibilitySection)}>
                    <NavLink to={sidebarItem.link} className={({isActive}) =>
                        [isActive
                            ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                            : styles.Sidebar__heading].join(' ')}>
                        {sidebarItem.content}
                    </NavLink>
                </div>
            </div>)
};

export default SidebarWithoutSubsections;
