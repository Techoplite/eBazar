import React from 'react';
import Aside from './aside/Aside';
import MainContent from './main-content/MainContent';

const Content = () => {
    return (
        <div className="content">
            <Aside />
            <MainContent />
        </div>
    );
}

export default Content;