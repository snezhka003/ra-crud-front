import PropTypes from "prop-types";
import Note from "./Note";

export default function NotesList(props) {
  const {item, onDelete} = props;

  return (
    <div className="notes_list_wraper">
      {item.map(o => <Note {...o} key={o.id} onDelete={onDelete} />)}
    </div>
  );
}

NotesList.propTypes = {
    onDelete: PropTypes.func,
    item: PropTypes.any,
}