import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privatecRoutes = [];

export { publicRoutes, privatecRoutes };
