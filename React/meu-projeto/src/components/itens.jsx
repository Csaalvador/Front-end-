import PropTypes from 'prop-types';

function Items({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Items.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};

Items.defaultProps = {
  marca: 'faltou a marca',
  ano_lancamento: 0,
};

export default Items;
