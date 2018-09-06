import { Injectable } from '@angular/core';

@Injectable()
export class FileLoader {

    private encodingDeclaration = 'data:text/json;charset=utf-8,'
    
    encode (data: Object): string {
        return this.encodingDeclaration + encodeURIComponent(JSON.stringify(data));
    }

    decode (string: string): Object {
        return JSON.parse(
            atob(
                decodeURIComponent(
                    string.substring(this.encodingDeclaration.length)
                )
            )
        )
    }

}