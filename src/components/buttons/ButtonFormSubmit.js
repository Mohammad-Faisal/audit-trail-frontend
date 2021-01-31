import React from 'react'
import { Button } from 'antd'


export default function ButtonFormSubmit(props) {
    return (
        <Button
            type={'submit'}
            style={{ marginTop: '10px', width: '100%' }}
            size='large'
            loading={props.isRequesting ? props.isRequesting : props.isRequesting2}
            className='btn-orange'
            onClick={(event) => props.control.handleSubmit(props.onSubmit)}
            // icon='check'
        >
            {props.title ? props.title : 'Submit'}
        </Button>
    )
}
