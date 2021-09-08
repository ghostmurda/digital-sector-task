/** Styles */
import {
    HeaderContainer,
    HeaderWrapper,
    LogoWrapper
} from './styles';

/** Media */
import { ReactComponent as LogoIcon } from '../../media/logo.svg';

/** Components */
import SearchField from '../../containers/SearchField';

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoWrapper>
                    <LogoIcon />
                    <span>DIGITAL SECTOR</span>
                </LogoWrapper>
                <SearchField />
            </HeaderContainer>
        </HeaderWrapper>
    );
}
