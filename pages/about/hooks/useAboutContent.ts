
import { useMemo } from 'react'
import content from '../../../public/content.json'

export const useAboutContent = () => useMemo(
    () => content
        .items
        .filter(item => item.sys.contentType.sys.id === 'aboutPage')[0]
    ,
    [])
