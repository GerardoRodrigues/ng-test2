import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikeWidgetModule } from '../like-widget/like-widget.module';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoBoardService } from '../photo-board/services/photo-board.service';

@NgModule({
    declarations: [PhotoFrameComponent],
    imports: [CommonModule, LikeWidgetModule],
    exports: [PhotoFrameComponent]
})

export class PhotoFrameModule {}