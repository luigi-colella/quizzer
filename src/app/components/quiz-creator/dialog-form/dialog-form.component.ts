import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dialog-form',
    templateUrl: './dialog-form.component.html'
})
export class DialogFormComponent implements OnInit {

    inputControlGroup: FormGroup
    inputControl: FormControl

    constructor(
        @Inject(MAT_DIALOG_DATA) private data
    ){}

    ngOnInit () {
        this.inputControlGroup = this.data.inputControlGroup;
        this.inputControl = this.data.inputControl;
    }

}