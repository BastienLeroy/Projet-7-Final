import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

// == Import : local
import './style.scss';

const Comment = ({ comment, reFetchComments, userId, userIsMod }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editTextareaValue, setEditTextareaValue] = useState(comment.content);
    const [userCanEdit, setUserCanEdit] = useState(false);

    useEffect(() => {
        if (userId === comment.user_id || userIsMod) {
            /**
             * Si le commentaire à été rédigé par l'utilisateur connecté ou si l'utilisateur est modérateur
             * alors il peut modifier ou supprimer le commentaire.
             * On modifie la valeur de "userCanEdit".
             */
            setUserCanEdit(true);
        }
    }, []);

    /**
     * Permet de valider la modification d'un commentaire.
     */
    const handleOnClickValidCommentButton = async () => {
        const dataEditComment = {
            id: comment.id,
            userId: userId,
            content: editTextareaValue
        };
        
        const response = await axios.put(
            'http://localhost:5000/api/comment/modifyComment',
            dataEditComment,
            {
                'withCredentials': true,
                headers: { 'Content-Type': 'application/json' }
            }
        );

        if (response.status === 200) {
            setIsEdit(false);
        }
    };

    /**
     * Permet de supprimer un commentaire.
     */
    const handleOnClickRemoveCommentButton = async () => {
        const response = await axios.delete(
            'http://localhost:5000/api/comment/deleteComment',
            {
                'withCredentials': true,
                headers: { 'Content-Type': 'application/json' },
                data: {
                    id: comment.id,
                    userId: userId,
                }
            }
        )

        if (response.status === 200) {
            reFetchComments();
        }
    };

    return (
        <li className="Post_Comments_List_Item">
            <div className="Post_Comments_List_Item_Header">
                <p>{comment.firstname} {comment.name}</p>
                <p>{comment.date} {comment.time}</p>
            </div>
            <div className="Post_Comments_List_Item_content">
                {isEdit
                    ? <textarea
                        value={editTextareaValue}
                        onChange={(e) => setEditTextareaValue(e.currentTarget.value)}
                    >
                    </textarea>
                    : editTextareaValue
                }
            </div>
            {
                userCanEdit &&
                <div className="Post_Comments_List_Item_ButtonContainer">
                    <button
                        className="Post_Comments_List_Item_ButtonContainer_Item Edit"
                        onClick={() => setIsEdit(!isEdit)}
                    >
                        <FontAwesomeIcon icon={faEdit} className="Post_Comments_List_Item_ButtonContainer_Item_Icon" />
                        {isEdit ? 'Annuler' : 'Modifier'}
                    </button>
                    {isEdit &&
                        <button
                            className="Post_Comments_List_Item_ButtonContainer_Item Save"
                            onClick={handleOnClickValidCommentButton}
                        >
                            <FontAwesomeIcon icon={faCheck} className="Post_Comments_List_Item_ButtonContainer_Item_Icon" />
                            Valider
                        </button>
                    }
                    <button
                        className="Post_Comments_List_Item_ButtonContainer_Item Remove"
                        onClick={handleOnClickRemoveCommentButton}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} className="Post_Comments_List_Item_ButtonContainer_Item_Icon" />
                        Supprimer
                    </button>
                </div>
            }
        </li>
    );
};

export default Comment;
