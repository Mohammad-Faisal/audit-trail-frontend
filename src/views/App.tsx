import React, { FC, Suspense } from 'react';
import './App.css';
import '../i18n';
import { LoadingIndicator } from './common-components/loader/LoadingIndicator';
import { ModalAuthentication } from './modals/ModalAuthentication';
import { Topbar } from './common-components/navigation/Topbar';
import { ModalMessage } from './common-components/notification/ModalMessage';
import { ToastMessage } from './common-components/notification/ToastMessage';
import { useSelector } from 'react-redux';
import { selectLoggedInUserType } from '../store/user/UserSelector';
import { UserType } from '../constants/GeneralConstants';
import { PageGeneralUser } from './pages/PageGeneralUser';
import { PageServiceProvider } from './pages/PageServiceProvider';
import { PageHome } from './pages/home/PageHome';
import { Switch } from 'react-router-dom';

const App: FC = () => {
    const userType = useSelector(selectLoggedInUserType);
    return (
        <div className="App">
            <Suspense fallback={<LoadingIndicator />}>
                <Topbar />
                <Switch>
                    {userType === UserType.GENERAL_USER && <PageGeneralUser />}
                    {userType === UserType.UNAUTHENTICATED && <PageHome />}
                    {userType === UserType.SERVICE_PROVIDER && <PageServiceProvider />}
                </Switch>
                <LoadingIndicator />
                <ModalMessage />
                <ToastMessage />
            </Suspense>
        </div>
    );
};

export default App;
