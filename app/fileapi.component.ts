import { Component, NgModule } from '@angular/core';
import { FileUploader } from './ng2-file-upload/ng2-file-upload';
import { Item } from './shop/models/item';
import { ShopService } from './shop/services/shop.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
@Component({
  moduleId: module.id,
  selector: 'file-api',
  templateUrl: 'file-upload.html'
})

export class FileApiComponent{
    //public URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
    public URL = 'http://localhost:62412/api/fileupload';
    public uploader = new FileUploader({ url: this.URL, authToken: localStorage.getItem('id_token') });
    item: Item;
    public createNewItemForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.pattern('/^[1-9][0-9]*$/')]
    });
    constructor(private fb: FormBuilder){
        this.item = new Item();
        console.log(this.uploader);
    }

    createNewItem(event){
      console.log(event);
      console.log(this.item);
      this.uploader.uploadAll();
    }
} 