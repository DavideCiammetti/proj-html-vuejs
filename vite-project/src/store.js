import {reactive} from 'vue';
import headerDataConfig from '../src/dataConfig/headerDataConfig.js';
import footDataConfig from '../src/dataConfig/footerDataConfig.js';

export const store = reactive({
    headerDataConfig,
    footDataConfig,
});