import Loadable from "react-loadable";
import Loading from '@components/Loading'
export default [
    {
        component: Loadable({
            loader: () => import('./containers/agent/index'),
            loading: Loading
        }),
        path: "/agent"
    },
    {
        component: Loadable({
            loader: () => import('./containers/help/index'),
            loading: Loading
        }),
        path: "/help"
    }
];
