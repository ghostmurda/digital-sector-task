/** Styles */
import { LinkItem, LinksListWrapper, LinksTitle } from "./styles";

export default function LinksList() {
    const links = [{title: 'Самая лучшая ссылка 1', link: 'https://swiperjs.com/api/'}]

    return (
        <LinksListWrapper>
            <LinksTitle>Ссылки</LinksTitle>
            {links && links.map((item) => {
                return (
                    <LinkItem>
                        <b>{item.title}</b>
                        <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                    </LinkItem>
                );
            })}
        </LinksListWrapper>
    );
}