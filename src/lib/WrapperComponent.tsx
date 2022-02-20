import React from 'react';

import {LocalizedComponent} from './LocalizedComponent';
import {LocalizedComponent2} from './LocalizedComponent2';

export const WrapperComponent = () => {
    return (
        <div>
            <LocalizedComponent/>
            <LocalizedComponent2/>
        </div>
    );
}
