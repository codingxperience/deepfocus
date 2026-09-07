import type AppRoot from './App';

/** The flat object every screen renders against, built once per render by
 *  `AppRoot.renderVals()`. */
export type View = ReturnType<AppRoot['renderVals']>;
