import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
    let fixture: ComponentFixture<AppDirectiveTestComponent>;
    let component: AppDirectiveTestComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppDirectiveTestComponent],
            imports: [ActionDirectiveModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AppDirectiveTestComponent);
        component = fixture.componentInstance;
    })
    
    it(`(D) (@Output appAciton) Should emit event with payload when ENTER key is pressed`, () => {
        const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
        const event = new KeyboardEvent('keyup', {key: 'Enter'});
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    })

    it(`(D) (@Output appAciton) Should emit event with payload when clicked`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const event = new Event('click');
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    })
})

@Component({
    template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})

class AppDirectiveTestComponent {
    event: Event = null;

    actionHandler(event: Event): void{
        this.event = event;
    }

    hasEvent(): boolean {
        return !!this.event;
    }
}