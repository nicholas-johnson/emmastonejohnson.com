
import { useMemo } from 'react'
import content from '../public/content.json'

export const usePaintings = (permalink: string) => useMemo(
    () => {
        const paintingList = content
            .items
            .filter(item => item.sys.contentType.sys.id === 'paintings')
            .find(item => item.fields.permalink === permalink)

        return paintingList;
    }, [permalink]);
