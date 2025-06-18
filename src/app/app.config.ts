// FAYL: src/app/app.config.ts

// Sizin mövcud importlarınız qalır
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Yeni importlar
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Tərcümə fayllarının yolunu göstərən funksiya
export function HttpLoaderFactory(http: HttpClient) {
  // ==========================================================
  // DÜZƏLİŞ BURADADIR: Yol "public" qovluğuna uyğun olaraq dəyişdirildi
  return new TranslateHttpLoader(http, './i18n/', '.json');
  // ==========================================================
}

export const appConfig: ApplicationConfig = {
  providers: [
    // Sizin mövcud providerləriniz (olduğu kimi qalır)
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    // Yeni providerlər
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'az',
      })
    ),
  ],
};
