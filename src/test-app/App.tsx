import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import React from 'react';
import {WrapperComponent} from '../lib';
import './App.css';

i18n.activate('en');

export function App() {
    return (
        <I18nProvider i18n={i18n}>
            <WrapperComponent/>
        </I18nProvider>
    );
}
