import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators'

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})

export class PhotoFrameComponent implements OnInit, OnDestroy{
    @Output() liked: EventEmitter<void> = new EventEmitter()
    @Input() description = ''
    @Input() src = ''
    @Input() likes = 0
    private debounceSubject: Subject<void> = new Subject()
    unsubscribe: Subject<void> = new Subject()
    
    ngOnInit(): void {
        this.debounceSubject.asObservable().pipe(debounceTime(500)).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
            this.liked.emit()
            this.likes++;
        })
    }

    ngOnDestroy(): void {
        this.unsubscribe.next()
        this.unsubscribe.complete()
    }

    like(){
        this.debounceSubject.next()
    }
}
