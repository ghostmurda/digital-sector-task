/** Components */
import Groups from '../../components/Groups';
import LinksList from '../../components/LinksList';

/** Redux */
import { useDispatch, useSelector } from 'react-redux';
import {
    getActiveGroup,
    getGroups,
    getLinks
} from '../../store/links/selectors';
import { changeActiveGroup } from '../../store/links/actions';

/** Styles */
import { LinksWrapper } from './styles';

export default function Links() {
    const dispatch = useDispatch();

    const { groups, links, activeGroupId } = useSelector((state) => ({
        groups: getGroups(state),
        links: getLinks(state),
        activeGroupId: getActiveGroup(state)
    }));

    const changeGroup = (groupId) => () => dispatch(changeActiveGroup(groupId));

    return (
        <LinksWrapper>
            <Groups
                groups={groups}
                activeGroupId={activeGroupId}
                changeGroup={changeGroup}
            />
            <LinksList links={links} activeGroupId={activeGroupId} />
        </LinksWrapper>
    );
}
