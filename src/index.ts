/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin indicating that the application is ready.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@yeebc/jupyterlab_neon_theme:plugin',
  description: 'A flat, 80\'s neon inspired theme for JupyterLab 4.x',
  requires: [IThemeManager],
  autoStart: true,
  activate: (_app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = '@yeebc/jupyterlab_neon_theme/index.css';

    manager.register({
      name: 'JupyterLab Neon Night',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
