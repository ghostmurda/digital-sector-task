/** React */
import { useState, useEffect } from 'react';

/** Components */
import Groups from '../../components/Groups';
import LinksList from '../../components/LinksList';
import ModalWindow from '../../components/ModalWindow';

/** Redux */
import { useDispatch, useSelector } from 'react-redux';
import {
    getActiveGroup,
    getGroups,
    getLinks,
    getSearchedString
} from '../../store/links/selectors';
import { addLink, changeActiveGroup } from '../../store/links/actions';

/** Styles */
import { Button, LinksWrapper } from './styles';

/** Misc */
import { v4 } from 'uuid';

export default function Links() {
    const [isModalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            key.includes('link') &&
                dispatch(addLink(JSON.parse(localStorage.getItem(key))));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { groups, links, activeGroupId, searchedString } = useSelector(
        (state) => ({
            groups: getGroups(state),
            links: getLinks(state),
            activeGroupId: getActiveGroup(state),
            searchedString: getSearchedString(state)
        })
    );

    const changeGroup = (groupId) => () => dispatch(changeActiveGroup(groupId));

    const addNewLink = (linkData) => {
        dispatch(addLink(linkData));

        localStorage.setItem(`link_${v4()}`, JSON.stringify(linkData));
    };

    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    return (
        <LinksWrapper>
            <Groups
                groups={groups}
                activeGroupId={activeGroupId}
                changeGroup={changeGroup}
            />
            <LinksList
                links={links}
                activeGroupId={activeGroupId}
                searchedString={searchedString}
            />
            <Button onClick={openModal}>???????????????? ????????????</Button>
            <ModalWindow
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                groups={groups}
                addLink={addNewLink}
            />
        </LinksWrapper>
    );
}
