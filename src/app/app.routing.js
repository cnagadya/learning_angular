"use strict";
var router_1 = require("@angular/router");
var trial_component_1 = require("./components/trial.component");
var about_component_1 = require("./components/about.component");
var appRoutes = [
    {
        path: '',
        component: trial_component_1.TrialComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map