import * as React from "react";
import { Route } from 'react-router-dom';
import MyPage from './MyPage';

export default [
    <Route exact path="/baz" component={MyPage} />,
];