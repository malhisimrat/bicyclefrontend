import { enableProdMode } from '@angulaxr/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}s

export function baseurl(){
  return "http://20.193.249.201:3015/api/";
}

export function imageurl(){
  return "http://20.193.249.201:3015/";
}

const provider = [
  {
    provide:'baseurl',useFactory:baseurl,deps:[]
  },
  {
    provide:'imageurl',useFactory:imageurl,deps:[]
  }
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
