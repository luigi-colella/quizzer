/* Vendor imports */
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { last } from 'rxjs/operators';
/* App imports */
import { AppLocalization } from './appLocalization.service';
import { APP_LANG_DEFAULT, APP_LANG_EN, APP_LANG_EN_TEST_VALUE, APP_LANG_IT, APP_LANG_IT_TEST_VALUE, APP_LANG_DEFAULT_TEST_VALUE } from '../constants';
import { LanguageMap } from '../langMapType';

describe('AppLocalization Service', () => {

    let service: AppLocalization

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule, HttpClientModule ],
            providers: [ AppLocalization ]
        });
        service = TestBed.get(AppLocalization);
    })

    it('should exists', () => {
        expect(service).toBeDefined();
    });

    it('should get the default language map', () => {
        return new Promise((resolve) => {
            service.getLanguageMap().subscribe({
                next: map => {
                    expect(map.testValue).toBe(APP_LANG_DEFAULT_TEST_VALUE);
                    resolve();
                }
            })
        })
    });

    it('should get a language map already loaded from the cache', () => {
        return new Promise((resolve) => {
            let loadedMap: LanguageMap;
            // Make the first request
            service.getLanguageMap().subscribe({
                next: map => {
                    loadedMap = map;
                    // Make the second request.
                    // To be sure that the service will use the cache instead of making another http request, mock the related method.
                    spyOn(TestBed.get(HttpClient), 'get').and.throwError('Made the http request instead of using the cache');
                    service.getLanguageMap().subscribe({
                        next: map => {
                            expect(loadedMap).toBe(map);
                            resolve();
                        }
                    })
                }
            })
        })
    })

    it('should set the english language', () => {
        return new Promise((resolve) => {
            // Subscribe to observable to get the language map
            service.getLanguageMap().subscribe({
                next: map => {
                    expect(map.testValue).toBe(APP_LANG_EN_TEST_VALUE);
                    resolve();
                }
            });
            // Set the language
            service.setLanguage(APP_LANG_EN);
        })
    });

    it('should set the italian language', () => {
        return new Promise((resolve) => {
            // Subscribe to observable to get the language map
            service.getLanguageMap().subscribe({
                next: map => {
                    expect(map.testValue).toBe(APP_LANG_IT_TEST_VALUE);
                    resolve();
                }
            });
            // Set the language
            service.setLanguage(APP_LANG_IT);
        })
    });

})