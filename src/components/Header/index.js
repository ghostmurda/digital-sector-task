/** Styles */
import { Button, HeaderContainer, HeaderWrapper, LogoWrapper, SearchField } from './styles';

/** Media */
import { ReactComponent as LogoIcon } from '../../media/logo.svg';


export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoWrapper>
                    <LogoIcon />
                    <span>DIGITAL SECTOR</span>
                </LogoWrapper>

                <SearchField placeholder="Поиск" />

                <Button>
                    Добавить ссылку
                </Button>
            </HeaderContainer>
        </HeaderWrapper>
    );
}