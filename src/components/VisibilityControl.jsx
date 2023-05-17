/* eslint-disable react/prop-types */


export const VisibilityControl = ({ setShowCompleted, showCompleted, clearTask }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it')) {
            clearTask();
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input type="checkbox"
                    onChange={() => setShowCompleted(!showCompleted)}
                    checked={showCompleted}
                    className="form-check-input"
                />
                <label>Show tasks Done</label>

            </div>
            <button onClick={handleDelete}
                    className="btn btn-danger "
                >
                    Clear
                </button>
        </div>
    )
}
