import PropTypes from "prop-types";

export default function Note(props) {
    const handleRemove = (event) => {
      props.onDelete(event.target.dataset.id);
    }
    
    return (
      <div className="notes_item_wraper">
        <span className='delete' data-id={props.id} onClick={handleRemove}>&#10006;</span>
        <span className='note_text'>{props.content}</span>
      </div>
    );
}

Note.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.any,
    content: PropTypes.any,
}