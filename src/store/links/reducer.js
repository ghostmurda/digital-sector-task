import { ADD_LINK, CHANGE_ACTIVE_GROUP, SET_SEARCHED_LINK } from "./types";

const initState = {
    groups: ['Тестовая группа', 'Вторая группа', 'Третья группа'],
    links: [
        {
            title: 'Самая лучшая ссылка',
            link: 'https://swiperjs.com/api/',
            groupId: 0
        }
    ],
    activeGroup: 0,
    searchedString: ''
};

export default function linksReducer(state = initState, action) {
    switch (action.type){
        case ADD_LINK:
            return {
                ...state,
                links: [...state.links, action.payload]
            }
        case CHANGE_ACTIVE_GROUP:
            return {
                ...state,
                activeGroup: action.payload
            }
        case SET_SEARCHED_LINK:
            return {
                ...state,
                searchedString: action.payload
            }
        default:
            return state;
    }
}