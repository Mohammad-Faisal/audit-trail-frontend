import styled from 'styled-components'


export const Card = styled.div`
    background-color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
        0 1px 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    border-radius: 5px;
    padding: 10px;
`

export const FormBasicContainer = styled(Card)`
    margin-bottom: 20px;
    margin-top: 20px;
`

export const FormItemContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  margin-top: 10px;
  grid-template-columns: 1fr;
`

export const PageTopContainer = styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
`