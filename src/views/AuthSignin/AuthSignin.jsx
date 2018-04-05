import React from 'react';
import { connect } from 'react-redux';

import Auth from 'components/Auth';

function AuthSignin(props) {
    return (
        <Auth />
    );
}

export default connect(null, { notify })(AuthSignin);