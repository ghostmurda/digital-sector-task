import { ADD_LINK, CHANGE_ACTIVE_GROUP, LOAD_LINKS } from "./types";

const initState = {
    groups: ['Тестовая группа', 'Вторая группа', 'Третья группа'],
    links: [
        {
            title: 'Самая лучшая ссылка',
            link: 'https://swiperjs.com/api/',
            groupId: 0
        }
    ],
    activeGroup: 0
};

export default function linksReducer(state = initState, action) {
    switch (action.type){
        case ADD_LINK:
            return {
                ...state,
                links: [...state.links, action.payload]
            }
        case LOAD_LINKS:
            return {
                ...state,
                links: action.payload
            }
        case CHANGE_ACTIVE_GROUP:
            return {
                ...state,
                activeGroup: action.payload
            }
        default:
            return state;
    }
}