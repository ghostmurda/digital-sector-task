/** React */
import { useState, useEffect } from 'react';

/** Styles */
import {
    LinkItem,
    LinkItemTitle,
    LinksListWrapper,
    LinksTitle
} from './styles';

/** Misc */
import { v4 } from 'uuid';

export default function LinksList(props) {
    const { links, activeGroupId, searchedString } = props;

    const [searchedWords, setSearchedWords] = useState();

    useEffect(() => {
        searchedString &&
            setSearchedWords(searchedString.toLowerCase().trim().split(' '));
    }, [searchedString]);

    return (
        <LinksListWrapper>
            <LinksTitle>Ссылки</LinksTitle>
            {links &&
                links.map((item, index) => {
                    let isSearched = false;

                    searchedWords &&
                        searchedWords.forEach((word) => {
                            (item.title.toLowerCase().includes(word) ||
                                item.link.toLowerCase().includes(word)) &&
                                (isSearched = true);
                        });

                    return (
                        item.groupId === activeGroupId && (
                            <LinkItem
                                key={index + v4()}
                                isSearched={isSearched}
                            >
                                <LinkItemTitle>{item.title}</LinkItemTitle>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.link}
                                </a>
                            </LinkItem>
                        )
                    );
                })}
        </LinksListWrapper>
    );
}
