import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface IProps {
    document?: Document
}

const ContentfulContent: React.FC<IProps> = ({ document }) => {
    if (!document) return null;

    return <>
        {documentToReactComponents(document)}
    </>
}

export default ContentfulContent