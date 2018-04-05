import App from '../../components/App';
import Auth from '../../components/Auth';

import { LoginRequired } from '../../components/RouteWrappers';
import endPoints from './endpoints';
import HeaderLayout from '../../views/HeaderLayout';
import PhoneList from '../../views/PhoneList';
import PhoneDetail from '../../views/PhoneDetail';
import AddForm from '../../views/AddForm';
import EditForm from '../../views/EditForm';

export default [
    {
        component: App,
        routes: [
            {
                path: endPoints.signin,
                exact: true,
                component: Auth, // View component
            },
            {
                path: endPoints.default,
                component: LoginRequired,   // Route protector
                routes: [
                    {
                        component: HeaderLayout,
                        routes: [
                            {
                                path: endPoints.signin,
                                exact: true,
                                component: Auth, // View component
                            },
                            {
                                path: endPoints.default,
                                exact: true,
                                component: PhoneList, // View component
                            },
                            {
                                path: endPoints.add,
                                exact: true,
                                component: AddForm // View component
                            },
                            {
                                path: endPoints.editWithId,
                                component: EditForm // View component
                            },
                            {
                                path: endPoints.detailWithId,
                                component: PhoneDetail // View component
                            },
                        ]
                    }
                ]
            }
        ]
    }
];