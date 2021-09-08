/** Styles */
import { GroupItem, GroupsTitle, GroupsWrapper } from "./styles";

/** Misc */
import { v4 } from "uuid";

export default function Groups() {
    const groups = ['группа1 ', 'группа 2', 'группа 3'];

    return (
        <GroupsWrapper>
            <GroupsTitle>Группы</GroupsTitle>
            {groups && groups.map((item, index) => <GroupItem key={v4}>{item}</GroupItem>)}
        </GroupsWrapper>
    );
}