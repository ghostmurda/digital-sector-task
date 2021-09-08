import { ADD_LINK, CHANGE_ACTIVE_GROUP, SET_SEARCHED_LINK } from "./types";

export const addLink = (linkData) => (
    {
        type: ADD_LINK,
        payload: linkData
    }
);

export const changeActiveGroup = (groupId) => (
    {
        type: CHANGE_ACTIVE_GROUP,
        payload: groupId
    }
);

export const setSearchedLink = (searchedString) => (
    {
        type: SET_SEARCHED_LINK,
        payload: searchedString
    }
);