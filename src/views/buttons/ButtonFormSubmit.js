import React from 'react'
import { Button } from 'antd'

export default function ButtonFormSubmit(props) {
    return (
        <Button
            style={{ width: '100%' }}
            size='large'
            loading={props.isRequesting}
            onClick={(event) => props.control.handleSubmit(props.onSubmit)}
        >
            {props.title ? props.title : 'Submit'}
        </Button>
    )
}
