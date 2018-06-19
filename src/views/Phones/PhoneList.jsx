import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Star from '@material-ui/icons/Star';
import Flower from '@material-ui/icons/LocalFlorist';

import { endPoints } from '../../config/routes';

const styles = {
  textContainer: {
    flexGrow: 1,
    flexBasis: '25%',
  },
  star: {
    fill: '#f1c40f',
  },
  phone: {
    fill: '#27ae60',
  },
  container: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    color: 'orange',
    fontSize: '40px',
  },
  subTitle: {
    color: 'grey',
    fontSize: '24px',
  },
  hintText: {
    color: 'skyblue',
    fontSize: '18px',
    marginRight: '20px',
  },
};

function PhoneList({ phones, history }) {
  return (
    <div>
      {!phones.length ? (
        <EmptyList />
      ) : (
        <List>
          {phones.map(phone => (
            <ListItem
              button
              key={phone.id}
              onClick={() => history.push(`${endPoints.phoneDetail}/${phone.id}`)}
            >
              <ListItemIcon>
                <PhoneIphone style={styles.phone} />
              </ListItemIcon>
              <ListItemText style={styles.textContainer}>
                {phone.model}
              </ListItemText>
              <ListItemText style={styles.textContainer}>
                {`$ ${phone.price} ${phone.status}`}
              </ListItemText>
              <ListItem>
                <Star style={styles.star} />
              </ListItem>
            </ListItem>
          ))}
        </List>
        )}
    </div>
  );
}

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

const PhoneListWithRouter = withRouter(PhoneList);

const mapStateToProps = state => ({
  phones: state.phones,
});

export default connect(mapStateToProps, null)(PhoneListWithRouter);


function EmptyList() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sorry!</h1>
      <h5 style={styles.subTitle}>There are no iphones right now!</h5>
      <span style={styles.hintText}> Try adding some </span>
      <Flower color="green" />
    </div>
  );
}

