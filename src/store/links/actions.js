import { ADD_LINK, CHANGE_ACTIVE_GROUP, LOAD_LINKS } from "./types";

export const addLink = (linkData) => (
    {
        type: ADD_LINK,
        payload: linkData
    }
);

export const loadLinks = (links) => (
    {
        type: LOAD_LINKS,
        payload: links
    }
);

export const changeActiveGroup = (groupId) => (
    {
        type: CHANGE_ACTIVE_GROUP,
        payload: groupId
    }
);