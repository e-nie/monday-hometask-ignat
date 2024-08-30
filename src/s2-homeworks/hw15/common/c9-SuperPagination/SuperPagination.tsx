import React, {ChangeEvent, useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'
import {Loader} from '../../../hw10/Loader';

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    // const lastPage = 10 // пишет студент // вычислить количество страниц
    const [loading, setLoading] = useState(false)
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = async (event: React.ChangeEvent<unknown>, page: number) => {
        // пишет студент
        setLoading(true)
       await  onChange(page, itemsCountForPage)
        setLoading(false)
    }

    const onChangeSelect = async (event: ChangeEvent<HTMLSelectElement>) => {
        const newCount = +event.currentTarget.value // Get the new items count from the select
        setLoading(true)
      await   onChange(page, newCount) // Call onChange with the new items count
        setLoading(false)
    }

    return (
        <div className = {s.pagination}>
            {loading && <Loader/>}
            <Pagination
                id = {id + '-pagination'}
                classes={{ ul: s.pagination }}
                // sx = {{
                //     color: 'rgb(255, 255, 255)',
                //     fontFamily: 'Roboto',
                //     fontSize: '14px',
                //     fontWeight: '400',
                //     lineHeight: '16px',
                //     textAlign: 'left'                    // стили для Pagination // пишет студент
                // }}
                page = {page}
                count = {lastPage}
                onChange = {onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className = {s.text1}>
                показать
            </span>

            <SuperSelect
                id = {id + '-pagination-select'}
                value = {itemsCountForPage}
                options = {[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange = {onChangeSelect}
            />

            <span className = {s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
