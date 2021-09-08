/** Components */
import Groups from "../../components/Groups";
import LinksList from "../../components/LinksList";

/** Styles */
import { LinksWrapper } from "./styles";

export default function Links() {
    return (
        <LinksWrapper>
            <Groups />
            <LinksList />
        </LinksWrapper>
    );
}