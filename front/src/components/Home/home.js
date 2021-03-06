// == Import : npm
import React, { useContext, useEffect, useState, useRef } from 'react';
import { UserContext } from '../../context/userContext';
import axios from 'axios';

// == Import : components
import Post from "./post";

// == Import : local
import './style.scss';


const Home = () => {
    const postImage = useRef(null);
    const [userState, userDispatch] = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [paginationPosts, setPaginationPosts] = useState(0);
    const [displayAddPost, setDisplayAddPost] = useState(false);
    const [file, setFile] = useState([]);
    const [textareaInputValue, setTextareaInputValue] = useState('');

    /**
     * On récupère un nombre de posts définit par le paramètre "pagination";
     * @param {number} pagination
     * @param {Bool} restart
     */
    const getPosts = async (pagination, restart) => {
        const getPosts = await axios.get(
            `http://localhost:5000/api/post/getAllPosts?&offset=${pagination}&userId=${userState.id}`,
            {
                withCredentials: true
            }
        );

        /**
         * Si "restart", on souhaite récupéré uniquement les premiers post comme au chargement du composant.
         * Sinon on ajoute les posts reçus à ceux déjà présent.
         */
        if (restart) {
            setPosts(getPosts.data);
        } else {
            setPosts([...posts, ...getPosts.data]);
        }
    };

    const handleOnClickShowMoreButton = async () => {
        setPaginationPosts(paginationPosts + 10);
    };

    /**
     * Fonction permettant d'ajouter un post.
     */
    const handleOnClickSubmitPost = async (e) => {
        e.preventDefault();

        const dataInput = {
            userId: userState.id,
            content: textareaInputValue
        };

        const formData = new FormData();
        formData.append('dataInput', JSON.stringify(dataInput));
        file.forEach(file => {
            formData.append("image", file);
        })

        const response = await axios.post(
            `http://localhost:5000/api/post/createPost?userId=${userState.id}`,
            formData,
            {
                'withCredentials': true,
                headers: {'content-type': 'multipart/form-data'}
            }
        );

        if (response.status === 201) {
            postImage.current.value = null; // Réinitialise la valeur de l'input "file".
            setTextareaInputValue(''); // On vide la valeur de "textarea".
            getPosts(0, true); // On récupère les premiers posts.
        }
    };

    /**
     * On appelle la fonction "getPosts()" au chargement du composant et à chaque modification
     * de la variable "paginationPosts".
     */
    useEffect(() => {
        getPosts(paginationPosts, false);
    }, [paginationPosts]);
    
    return (
        <div className="Home">
            <div className="Home_Container">
                <div className="Home_Add_Post">
                    <button
                        className="Home_Add_Post_Button"
                        type='button'
                        onClick={() => setDisplayAddPost(!displayAddPost)}
                    >
                        Ajouter un nouveau post...
                    </button>
                    {displayAddPost &&
                        <form className="Home_Add_Post_Container">
                            <div className="Home_Add_Post_Container_Img">
                                {postImage?.current && postImage.current.files.length !== 0 &&
                                    <img className="Home_Add_Post_Container_Img_Show" src={URL.createObjectURL(postImage.current.files[0])} alt="du post" />
                                }
                                <label htmlFor="image">Ajouter une image</label>
                                <input
                                    id='image'
                                    className="Home_Add_Post_Container_Img_InputImg"
                                    name='image'
                                    type='file'
                                    ref={postImage}
                                    onChange={e => setFile(Array.from(e.target.files))}
                                />
                            </div>
                            <div className="Home_Add_Post_Container_Content">
                                <textarea
                                    value={textareaInputValue}
                                    placeholder="Ajouter un contenu ..."
                                    onChange={(e) => setTextareaInputValue(e.currentTarget.value)}
                                ></textarea>
                            </div>
                            <div className="Home_Add_Post_Container_Button">
                                <button
                                    type="submit"
                                    onClick={handleOnClickSubmitPost}
                                >
                                    Valider
                                </button>
                            </div>
                        </form>
                    }
                </div>
                <div className="Home_Post">
                    {posts.length !== 0 && posts.map(postData => {
                        return <Post
                            dataPost={postData}
                            userImage={userState.image_url}
                            userId={userState.id}
                            userIsMod={userState.isMod}
                            getPosts={getPosts}
                            key={postData.id}
                        />
                    })}
                </div>
                <div className="Home_ShowMore">
                    <button
                        onClick={handleOnClickShowMoreButton}
                    >Afficher plus</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
