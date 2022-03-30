
import { useMemo } from 'react'
import content from '../../../public/content.json'

export const usePaintings = () => useMemo(
    () => {
        const paintingList = content
            .items
            .filter(item => item.sys.contentType.sys.id === 'paintings');

        if (paintingList.length === 0) return [];
        const paintings = paintingList[0]
            .fields
            .painting
            .map(painting => painting.fields)
        return paintings;
    },
    [])
