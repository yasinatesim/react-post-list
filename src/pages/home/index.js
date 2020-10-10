import React, { useState, useEffect } from 'react';

// Utilities
import axios from 'axios';
import getData from '../../utils/fetch';

// Containers
import Content from '../../containers/content';
import ListItems from '../../containers/list-items';

// Components
import Modal from '../../components/modal';

// Styles
import '../../App.scss';

function Home() {
  const [posts, setPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    (async () => {
      const _posts = await getData('https://jsonplaceholder.typicode.com/posts?_limit=6');
      if (isMounted) setPosts(_posts);
    })();

    return () => {
      setIsMounted(false);
    };
  }, [posts, isMounted]);

  /**
   * Handle click edit button on the item
   */
  const handleClickEditItem = (item) => {
    setShowModal(true);
    setSelectedPost({
      id: item.id,
      title: item.title,
      body: item.body,
    });
  };

  /**
   * Handle click on the modal
   */
  const editPost = async () => {
    const postId = selectedPost.id;
    const itemIndex = posts.findIndex((element) => element.id === postId);
    const newItems = [...posts];
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, selectedPost);

    newItems[itemIndex] = {
      ...posts[itemIndex],
      ...selectedPost,
    };

    setPosts(newItems);
    setShowModal(false);
  };

  /**
   * Handle click remove button on the item
   */
  const handleClickRemoveItem = async (item) => {
    const postId = item.id;
    const newItems = posts.filter((i) => i.id !== postId);

    // eslint-disable-next-line
    if (window.confirm('Silmek istediğine emin misin?')) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      await setPosts(newItems);
    }
  };

  const handleChange = (event) => {
    setSelectedPost({
      ...selectedPost,
      [event.target.name]: event.target.value,
    });
  };

  // Modal
  const toggleModal = ({ isOpen = false }) => {
    setShowModal(isOpen);
  };

  return (
    <Content>
      <ListItems posts={posts} handleClickEdit={handleClickEditItem} handleClickRemove={handleClickRemoveItem} />
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          handleChange={handleChange}
          title={selectedPost.title}
          body={selectedPost.body}
          editPost={editPost}
        />
      )}
    </Content>
  );
}

export default Home;
