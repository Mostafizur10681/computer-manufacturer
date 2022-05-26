import React from 'react';

const DeleteUserModal = ({ deleteUser, setDeleteUser, refetch }) => {
    const handleDelet = () => {

    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-md text-red-500">
                        Are you sure want to delete ''{deleteUser.name}'' ?
                    </h3>

                    <div class="modal-action">
                        <button
                            onClick={() => handleDelet(deleteUser._id)}
                            className="btn btn-xs btn-error"
                        >
                            Delete
                        </button>
                        {/* <label
                            onClick={() => setDeletingProduct(part)}
                            for="delete-confirm-modal"
                            class="btn btn-xs btn-error"
                        >
                            Delete
                        </label> */}
                        <label for="delete-confirm-modal" class="btn btn-xs btn-accent">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;