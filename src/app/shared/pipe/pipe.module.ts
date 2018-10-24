import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraytoStingpipePipe } from '../../pipes/arrayto-stingpipe.pipe';

@NgModule({
  imports: [
    CommonModule
    
  ],
  exports:[ArraytoStingpipePipe],
  declarations: [ArraytoStingpipePipe]
})
export class PipeModule { }
