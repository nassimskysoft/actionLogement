import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutonPreviewComponent } from './bouton/bouton-preview/bouton-preview.component';
import { CameraPreviewComponent } from './bouton/camera-preview/camera-preview.component';

const routes: Routes = [
  { path: 'bouton', component: BoutonPreviewComponent },
  { path: 'camera', component: CameraPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
