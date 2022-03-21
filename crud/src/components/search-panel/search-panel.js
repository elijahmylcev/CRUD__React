import { Component } from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  changeTerm = (e) => {
    const { onUpdateSearch } = this.props;
    const term = e.target.value;
    this.setState({
      term,
    });
    onUpdateSearch(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-panel">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search..."
          value={term}
          onChange={this.changeTerm}
        />

      </div>
    );
  }
}

SearchPanel.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
};

export default SearchPanel;
