/** React */
import { useState } from 'react';

/** Components */
import Groups from '../../components/Groups';
import LinksList from '../../components/LinksList';
import ModalWindow from '../../components/ModalWindow';

/** Redux */
import { useDispatch, useSelector } from 'react-redux';
import {
    getActiveGroup,
    getGroups,
    getLinks
} from '../../store/links/selectors';
import { addLink, changeActiveGroup } from '../../store/links/actions';

/** Styles */
import { Button, LinksWrapper } from './styles';

export default function Links() {
    const [isModalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const { groups, links, activeGroupId } = useSelector((state) => ({
        groups: getGroups(state),
        links: getLinks(state),
        activeGroupId: getActiveGroup(state)
    }));

    const changeGroup = (groupId) => () => dispatch(changeActiveGroup(groupId));
    const addNewLink = (linkData) => dispatch(addLink(linkData));

    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    return (
        <LinksWrapper>
            <Groups
                groups={groups}
                activeGroupId={activeGroupId}
                changeGroup={changeGroup}
            />
            <LinksList links={links} activeGroupId={activeGroupId} />
            <Button onClick={openModal}>Добавить ссылку</Button>
            <ModalWindow
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                groups={groups}
                addLink={addNewLink}
            />
        </LinksWrapper>
    );
}
