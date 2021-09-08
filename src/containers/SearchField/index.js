/** React */
import { useRef } from 'react';

/** Styles */
import { useDispatch } from 'react-redux';

/** Redux */
import { SearchInputField } from './styles';
import { setSearchedLink } from '../../store/links/actions';

/** Misc */
import debounce from 'lodash/debounce';

export default function SearchField() {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleChange = debounce(() => {
        dispatch(setSearchedLink(inputRef.current.value));
    }, 1000);

    return (
        <SearchInputField
            placeholder="Поиск"
            onChange={handleChange}
            ref={inputRef}
        />
    );
}
