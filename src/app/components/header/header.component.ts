/* Vendor imports */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
/* App imports */
import { APP_TITLE, APP_LANG_EN, APP_LANG_IT } from '../../constants';
import { AppLanguage, AppLanguageMap } from '../../types';
import { AppLocalization } from '../../services/appLocalization.service';
import { LanguageMap } from '../../langMapType';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class AppHeader implements OnInit, OnDestroy {

    title = APP_TITLE
    langMap: AppLanguageMap
    langChangeSubscription: Subscription;
    availableLangs = [
        { name: 'English', value: APP_LANG_EN },
        { name: 'Italiano', value: APP_LANG_IT }
    ]

    constructor(
        private localization: AppLocalization
    ) {}

    ngOnInit () {
        this.langMap = {} as LanguageMap; // Initial value to use in the template before subscription to Observable
        this.langChangeSubscription = this.localization.getLanguageMap().subscribe({
            next: langMap => this.langMap = langMap
        })
    }

    ngOnDestroy () {
        this.langChangeSubscription.unsubscribe();
    }

    /**
     * Change the app language
     * @param {string} language language to set
     */
    changeLanguage (language: AppLanguage) {
        this.localization.setLanguage(language);
    }

}