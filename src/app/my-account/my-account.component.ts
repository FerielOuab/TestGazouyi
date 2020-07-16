import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker';
import {ActionSheetController} from '@ionic/angular';
import {WebView} from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  listePhotos: Array<String> = [];
  private imageSrc: string;
  constructor(private camera: Camera,
              public actionSheetController: ActionSheetController,
              private webView: WebView
  ) { }

  ngOnInit() {}

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {

      // const tempFilename = imageData.substr(imageData.lastIndexOf('/') + 1);
      //
      // const tempBaseFilesystemPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
      //
      // const newBaseFilesystemPath = this.file.dataDirectory;

      console.log('IMAGE:' + imageData);
      const displayImage = this.webView.convertFileSrc(imageData);
      this.listePhotos.push(displayImage);
      console.log('liste IMAGE:' + this.listePhotos);
    }, (err) => {
      console.log('erreur chargement image');
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

}
