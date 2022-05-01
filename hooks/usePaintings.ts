
import { useMemo } from 'react'
import content from '../public/content.json'

export const usePaintings = (listId: number) => useMemo(
    () => {
        const paintingList = content
            .items
            .filter(item => item.sys.contentType.sys.id === 'paintings')

        if (!paintingList) return [];

        if (!paintingList[0]) return [];

        const paintings = paintingList[listId]?.fields?.painting;

        if (!paintings) return [];

        return paintings;
    },
    []);
