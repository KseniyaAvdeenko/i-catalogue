import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {mainPageSettingsSlice} from "../reducers/mainPageSettingsSlice";
import {IMainPageSetting} from "../../interface/IPagesSettings";
import {userSlice} from "../reducers/userSlice";

export const loadMainPageSettings = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(mainPageSettingsSlice.actions.mainPageFetching())
        const response = await axios.get<IMainPageSetting>(apiUrl + `page_settings/main_page_settings/get_main_page/`, getRequestHeaders())
        dispatch(mainPageSettingsSlice.actions.loadMainPageSuccess(response.data))
    } catch (e) {
        dispatch(mainPageSettingsSlice.actions.loadMainPageFail('Ошибка'))
    }
}

export const updateMainPageSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            dispatch(mainPageSettingsSlice.actions.mainPageFetching())
            const response = await axios.patch<IMainPageSetting>(apiUrl + `page_settings/main_page_settings/${id}/`,
                JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(mainPageSettingsSlice.actions.updateMainPageSuccess(response.data))


        } catch (e) {
            dispatch(mainPageSettingsSlice.actions.updateMainPageFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}