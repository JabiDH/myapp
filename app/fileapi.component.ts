import { Component } from '@angular/core';
import { FileUploader } from './ng2-file-upload/ng2-file-upload';

@Component({
  moduleId: module.id,
  selector: 'file-api',
  templateUrl: 'file-upload.html'
})

export class FileApiComponent{
    //public URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
    public URL = 'http://localhost:62412/api/fileupload';
    public uploader = new FileUploader({ url: this.URL });
    constructor(){
        
    }
} 