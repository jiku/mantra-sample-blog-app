import {createApp} from 'mantra-core';
import initContext from '/imports/configs/context';

// modules
import coreModule from '/imports/modules/core';
import commentsModule from '/imports/modules/comments';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();
