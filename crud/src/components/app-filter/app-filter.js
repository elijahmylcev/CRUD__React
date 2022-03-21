import './app-filter.css';
import PropTypes from 'prop-types';

function AppFilter(props) {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: '> 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const { filter, onFilterSelect } = props;
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

AppFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
};

export default AppFilter;
