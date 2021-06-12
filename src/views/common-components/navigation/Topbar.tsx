import { FC } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../../../store/user/UserAction';
import { selectLoggedInUserInfo, selectLoggedInUserType } from '../../../store/user/UserSelector';
import { UserType } from '../../../constants/GeneralConstants';
import { ModalAuthentication } from '../../modals/ModalAuthentication';
import styled from 'styled-components';
import logo from './logo.jpg';

export const Topbar: FC = () => {
    const dispatch = useDispatch();

    const userInfo: any = useSelector(selectLoggedInUserInfo);
    const userType = useSelector(selectLoggedInUserType);

    return (
        <TopbarContainer>
            <img src={logo} style={{ height: '70px' }} />
            <TopbarTitle> Service Maniac</TopbarTitle>
            {/*{userInfo && <h2>Logged In as {userInfo?.data?.name}</h2>}*/}
            {userType === UserType.UNAUTHENTICATED ? (
                <ModalAuthentication />
            ) : (
                <Button danger onClick={() => dispatch(UserAction.signOut())}>
                    {' '}
                    Sign Out
                </Button>
            )}
        </TopbarContainer>
    );
};

const TopbarTitle = styled.h1`
    display: flex;
    height: 60px;
    width: auto;
    font-weight: bold;
    align-items: center;
    color: #383d3a;
    color: #d3e3d9;
    margin-left: 10px;
    margin-top: 5px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const TopbarContainer = styled.div`
    height: 80px;
    margin-bottom: 20px;
    text-align: start;
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr auto;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;
