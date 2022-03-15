import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import home from './pages/home';
import G2Esports from './pages/G2Esports';
import Schalke04 from './pages/Schalke04';
import Fnatic from './pages/Fnatic';
import Splyce from './pages/Splyce';
import Origen from './pages/Origen';

const Routes = createAppContainer(
    createSwitchNavigator({
        home,
        G2Esports,
        Schalke04,
        Fnatic,
        Splyce,
        Origen
    })
);

export default Routes;