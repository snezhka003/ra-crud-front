import PropTypes from "prop-types";

export default function GetButton(props) {
  const { onGet } = props;

  return (
    <div className="button_wraper">
      <span className="notes_header">Notes</span>
      <button className="refresh" onClick={onGet}>&#8635;</button>
    </div>
  );
}

GetButton.propTypes = {
    onGet: PropTypes.func,
}