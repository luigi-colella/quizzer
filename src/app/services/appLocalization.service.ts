/* Vendor imports */
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subscription, of, pipe } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
/* App imports */
import { APP_LANG_DEFAULT } from '../constants';
import { AppLanguage, AppLanguageMap } from '../types';


@Injectable()
export class AppLocalization {

    private _selectedLanguage$: ReplaySubject<AppLanguage>
    private _cachedLanguageMaps: { [key: string]: AppLanguageMap } = {};

    constructor (private http: HttpClient, private location: Location) {
        this._selectedLanguage$ = new ReplaySubject(1);
        this._selectedLanguage$.next(APP_LANG_DEFAULT);
    }

    /**
     * Change the selected language
     * @param {string} language language to set
     */
    setLanguage (language: AppLanguage) {
        this._selectedLanguage$.next(language);
    }

    /**
     * Get an observable of the map of the current app language
     * @return {Object} an observable object
     */
    getLanguageMap (): Observable<AppLanguageMap> {
        return this._selectedLanguage$.pipe(
            switchMap(language => { return this._fetchLanguageMap(language) })
        );
    }

    /**
     * Get a map of values according to provided language
     * @param  {string} language language of map
     * @return {Object} an observable that emits the map object
     */
    private _fetchLanguageMap (language: AppLanguage): Observable<AppLanguageMap> {
        // Check if searched map is stored in cache. If not, fetch it and save in order to reuse in future.
        if (this._cachedLanguageMaps[language]) {
            return of(this._cachedLanguageMaps[language]);
        } else {
            var mapUrl = this.location.prepareExternalUrl('assets/i18n/' + language + '.json');
            return this.http.get<AppLanguageMap>(mapUrl)
                .pipe(
                    // Store the fetched map in cache
                    tap((map) => { this._cachedLanguageMaps[language] = map; })
                )
        }
    }

}