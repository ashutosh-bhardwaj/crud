import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem } from 'material-ui/List';
import PhoneIphone from 'material-ui/svg-icons/hardware/phone-iphone';
import Star from 'material-ui/svg-icons/toggle/star';
import Flower from 'material-ui/svg-icons/maps/local-florist';

import { endPoints } from '../../config/routes';


function PhoneList(props) {
  const { phones } = props;
  return (
    <div>
      {!phones.length ? (
        <EmptyList />
      ) : (
          <List>
            {phones.map(phone => (
              <ListItem
                key={phone.id}
                primaryText={phone.model}
                leftIcon={<PhoneIphone />}
                rightIcon={<Star />}
                secondaryText={`$ ${phone.price} ${phone.status}`}
                onClick={() =>
                  props.history.push(`${endPoints.phoneDetail}/${phone.id}`)
                }
              />
            ))}
          </List>
        )}
    </div>
  );
};


const PhoneListWithRouter = withRouter(PhoneList);

const mapStateToProps = state => ({
  phones: state.phones,
});

export default connect(mapStateToProps, null)(PhoneListWithRouter);

const styles = {
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

