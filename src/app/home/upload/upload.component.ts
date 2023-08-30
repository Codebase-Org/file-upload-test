import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Iuploads} from "../../interfaces/iuploads";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm = new FormGroup({
    filename: new FormControl(''),
    file_title: new FormControl(''),
    file_content: new FormControl('')
  });


  selectedFile: any = '';
  file_data: any = '';
  file: File | null = null;
  constructor(private router: Router, private api: ApiService) {
  }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList[0];
      //console.log('File Info:', this.file.name, this.file.size, this.file.type);
      if((this.file.size/1048576)<=4) {

        this.file_data = this.file;
      }
    }
  }

  uploadFile(formObj: any) {
    if(this.file_data) {
      let formData = new FormData();
      formData.append('file', this.file_data, this.file_data.name);
      formData.append('file_title', formObj.file_title);
      formData.append('file_content', formObj.file_content);
      formData.append('filename', this.file_data.name);
      //console.log(formData);

      this.selectedFile = formData;

      console.log(this.selectedFile);

      this.api.uploadFile(this.selectedFile).subscribe(data => {
        console.log(data);
        this.router.navigate(['./home/frontpage']);
      });

    }
  }
}
