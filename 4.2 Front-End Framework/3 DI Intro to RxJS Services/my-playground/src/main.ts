import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  // .bootstrapModule(AppModule, { ngZone: 'noop' }) //The whole app is switched off from the change detection
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
