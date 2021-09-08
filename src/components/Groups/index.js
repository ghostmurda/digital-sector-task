/** Styles */
import { GroupItem, GroupsTitle, GroupsWrapper } from './styles';

/** Misc */
import { v4 } from 'uuid';

export default function Groups(props) {
    const { groups, activeGroupId, changeGroup } = props;

    return (
        <GroupsWrapper>
            <GroupsTitle>Группы</GroupsTitle>
            {groups &&
                groups.map((item, index) => (
                    <GroupItem
                        key={index + v4}
                        isChoosed={index === activeGroupId}
                        onClick={changeGroup(index)}
                    >
                        {item}
                    </GroupItem>
                ))}
        </GroupsWrapper>
    );
}
