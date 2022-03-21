import { Component } from 'react';
import PropTypes from 'prop-types';
import './app-info.css';

class AppInfo extends Component {
  render() {
    const { information } = this.props;
    console.log(information.numberEmployees);
    return (
      <div className="app-info">
        <h1>Учет сотрудников в компании</h1>
        <h2>
          Общее число сотрудников:
          {` ${information.numberEmployees}`}
        </h2>
        <h2>
          Премию получат:
          {}
        </h2>
      </div>
    );
  }
}

AppInfo.propTypes = {
  information: PropTypes.objectOf.isRequired,
  numberEmployees: PropTypes.number.isRequired,
};
export default AppInfo;
