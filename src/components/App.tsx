import React, { FC,Suspense } from 'react';
import './App.css';
import '../i18n'
import {SiteTable} from "./tables/SiteTable";
import {LoadingIndicator} from "./common-components/loader/LoadingIndicator";
import {ModalAuthentication} from "./modals/ModalAuthentication";

const App: FC = ()=> {
  return (
    <div className="App">
        <Suspense fallback={<LoadingIndicator />}>
            <SiteTable />
            <ModalAuthentication />
            <LoadingIndicator />
        </Suspense>
    </div>
  );
}

export default App;
