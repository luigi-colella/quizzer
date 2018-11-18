import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { FormControl } from '@angular/forms';
import { LanguageMap } from '../../../langMapType';

@Component({
    selector: 'app-dialog-form',
    templateUrl: './dialog-form.component.html',
    styleUrls: ['dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit, OnDestroy {

    inputControl: FormControl
    tooltipText: string
    errorMatcher: ErrorStateMatcher
    languageMap: LanguageMap

    constructor(
        private dialogRef: MatDialogRef<DialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) private data
    ){}

    ngOnInit () {
        this.inputControl = this.data.inputControl;
        this.tooltipText = this.data.tooltipText;
        this.errorMatcher = this.data.errorMatcher;
        this.languageMap = this.data.languageMap;
        document.addEventListener('keydown', this.onKeyboardEnterEvent);
    }

    ngOnDestroy () {
        document.removeEventListener('keydown', this.onKeyboardEnterEvent);
    }

    onKeyboardEnterEvent = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') this.onClose();
    }

    onClose () {
        this.dialogRef.close();
    }

}