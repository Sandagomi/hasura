import React from 'react';
import {useFetchAllTodosQuery} from '../graphql'
import { Spinner } from 'react-bootstrap';


export const TodoPage = () => {

    const {loading, data, error} = useFetchAllTodosQuery();

    return(
        <div>
            {loading ? <Spinner animation="border"/> : JSON.stringify(data)}
        </div>
    )

}
