import {Component} from '@angular/core';
import {UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    VALID_EXTENSION = ['text/plain', 'application/vnd.ms-excel', 'txt', 'csv'];

    public files: UploadFile[] = [];

    public message: string;

    public dropped(event: UploadEvent) {
        this.files = event.files;
        for (const droppedFile of event.files) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    // Here you can access the real file
                    if (this.VALID_EXTENSION.some(x => x === file.type
                        || file.name.split('.').some(y => x === y))) {
                        this.message = 'allow';
                    } else {
                        this.message = 'deny';
                        this.files = [];
                    }
                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                // console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }

}
