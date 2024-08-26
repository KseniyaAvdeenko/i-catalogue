import {AppDispatch} from "../store";
import {userSlice} from "../reducers/userSlice";
import axios from "axios";
import {IFooterSettings} from "../../interface/ICommonSettings";
import {apiUrl, getAuthConfigApplicationJson} from "./apiUrl";
import {footerSettingsSlice} from "../reducers/footerSettingsSlice";


export const loadFooterSettings = () => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            dispatch(footerSettingsSlice.actions.footerSettingsFetching())
            const response = await axios.get<IFooterSettings>(apiUrl + 'common_page_settings/footer_settings/get_footer/', getAuthConfigApplicationJson(localStorage.access))
            dispatch(footerSettingsSlice.actions.loadFooterSettingsSuccess(response.data))
        } catch (e) {
            dispatch(footerSettingsSlice.actions.loadFooterSettingsFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const updateFooterSettings = (id: number, data: any) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            const body = JSON.stringify(data)
            const response = await axios.patch<IFooterSettings>(apiUrl + `common_page_settings/footer_settings/${id}/`, body, getAuthConfigApplicationJson(localStorage.access))
            dispatch(footerSettingsSlice.actions.updateFooterSettingsSuccess(response.data))
        } catch (e) {
            dispatch(footerSettingsSlice.actions.updateFooterSettingsFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const restoreFooterSettings = (id: number) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try{
            const response = await axios.get<boolean>(apiUrl + `common_page_settings/footer_settings/${id}/restore_footer/`, getAuthConfigApplicationJson(localStorage.access))
            dispatch(footerSettingsSlice.actions.restoreFooterSettingsSuccess(response.data))
        }catch (e) {
            dispatch(footerSettingsSlice.actions.restoreFooterSettingsFail(false))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}