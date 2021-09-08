/** Styles */
import { LinkItem, LinksListWrapper, LinksTitle } from './styles';

/** Misc */
import { v4 } from 'uuid';

export default function LinksList(props) {
    const { links, activeGroupId } = props;

    return (
        <LinksListWrapper>
            <LinksTitle>Ссылки</LinksTitle>
            {links &&
                links.map((item, index) => {
                    return item.groupId === activeGroupId && (
                        <LinkItem key={index + v4()}>
                            <b>{item.title}</b>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.link}
                            </a>
                        </LinkItem>
                    );
                })}
        </LinksListWrapper>
    );
}
