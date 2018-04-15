import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Auth from '../../components/Auth';
import { notify } from '../../redux/actions/notice';

function AuthSignin(props) {
    return (
        <Auth openNotice={props.notify} />
    );
}

AuthSignin.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default connect(null, { notify })(AuthSignin);
