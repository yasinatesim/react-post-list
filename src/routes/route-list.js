// Containers
import Home from '../pages/home';
import PostDetail from '../pages/post-detail';
import ProfileDetail from '../pages/profile-detail';

const routeList = [
  {
    path: `/`,
    component: Home,
    exact: true,
  },
  {
    path: `/profile/:id`,
    component: ProfileDetail,
    exact: false,
  },
  {
    path: `/post/:id`,
    component: PostDetail,
    exact: false,
  },
];


export default routeList;
