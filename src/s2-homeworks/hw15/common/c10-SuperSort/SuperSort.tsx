import React, {useState} from 'react'
import downIcon from '../arrow-down.svg'
import upIcon from '../arrow-up.svg'
import noneIcon from '../sort-none.svg'
import {Loader} from '../../../hw10/Loader'



export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === down ? up : sort === up ? '' : down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const [loading, setLoading] = useState(false)
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        setLoading(true)
        onChange(pureChange(sort, down, up))
        setLoading(false)
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id = {id + '-sort-' + value}
            onClick = {onChangeCallback}
        >
             {loading && <Loader />}
                     <img alt = 'sort'
                          id = {id + '-icon-' + sort}
                          src = {icon}
                     />

                 </span>
    )
}

export default SuperSort
