import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-dialog-form',
    templateUrl: './dialog-form.component.html',
    styleUrls: ['dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit, OnDestroy {

    inputControl: FormControl
    errorMatcher: ErrorStateMatcher

    constructor(
        private dialogRef: MatDialogRef<DialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) private data
    ){}

    ngOnInit () {
        this.inputControl = this.data.inputControl;
        this.errorMatcher = this.data.errorMatcher;
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