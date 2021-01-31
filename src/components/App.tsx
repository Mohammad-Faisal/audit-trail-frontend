import React, { FC,Suspense } from 'react';
import './App.css';
import '../i18n';
import {SiteTable} from "./tables/SiteTable";
import {LoadingIndicator} from "./common-components/loader/LoadingIndicator";
import {ModalAuthentication} from "./modals/ModalAuthentication";
import {Topbar} from "./common-components/navigation/Topbar";
import {Card, PageTopContainer} from "./common-components/layout/FormStyles";
import {ModalCreateForm} from "./modals/ModalCreateForm";


const App: FC = ()=> {
  return (
    <div className="App">
        <Suspense fallback={<LoadingIndicator />}>
            <Topbar />
            <PageTopContainer>
                <h1>Site Data</h1>
                <ModalCreateForm />
            </PageTopContainer>
            <SiteTable />
            <ModalAuthentication />
            <LoadingIndicator />
        </Suspense>
    </div>
  );
}

export default App;


