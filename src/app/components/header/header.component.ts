/* Vendor imports */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
/* App imports */
import { APP_TITLE, APP_LANG_EN, APP_LANG_IT, APP_LANG_ES, APP_LANG_FR } from '../../constants';
import { AppLanguage, AppLanguageMap } from '../../types';
import { AppLocalization } from '../../services/appLocalization.service';
import { LanguageMap } from '../../langMapType';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {

    title = APP_TITLE
    languageMap: AppLanguageMap;
    languageChangeSubscription: Subscription;
    availableLangs = [
        { name: 'English', value: APP_LANG_EN },
        { name: 'Italiano', value: APP_LANG_IT },
        { name: 'Español', value: APP_LANG_ES },
        { name: 'Français', value: APP_LANG_FR }
    ]

    constructor(
        private localization: AppLocalization
    ) {}

    ngOnInit () {
        this.languageMap = {} as LanguageMap;
        this.languageChangeSubscription = this.localization.getLanguageMap().subscribe({
            next: langMap => this.languageMap = langMap
        })
    }

    ngOnDestroy () {
        this.languageChangeSubscription.unsubscribe();
    }

    /**
     * Change the app language
     * @param {string} language language to set
     */
    changeLanguage (language: AppLanguage) {
        this.localization.setLanguage(language);
    }

}