import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableComponent } from './ionic-selectable.component';
import { IonicSelectableAddItemTemplateDirective } from './ionic-selectable-add-item-template.directive';
import { IonicSelectableCloseButtonTemplateDirective } from './ionic-selectable-close-button-template.directive';
import { IonicSelectableFooterTemplateDirective } from './ionic-selectable-footer-template.directive';
import { IonicSelectableGroupEndTemplateDirective } from './ionic-selectable-group-end-template.directive';
import { IonicSelectableGroupTemplateDirective } from './ionic-selectable-group-template.directive';
import { IonicSelectableHeaderTemplateDirective } from './ionic-selectable-header-template.directive';
import { IonicSelectableIconTemplateDirective } from './ionic-selectable-icon-template.directive';
import { IonicSelectableItemEndTemplateDirective } from './ionic-selectable-item-end-template.directive';
import { IonicSelectableItemIconTemplateDirective } from './ionic-selectable-item-icon-template.directive';
import { IonicSelectableItemTemplateDirective } from './ionic-selectable-item-template.directive';
import { IonicSelectableMessageTemplateDirective } from './ionic-selectable-message-template.directive';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
import { IonicSelectablePlaceholderTemplateDirective } from './ionic-selectable-placeholder-template.directive';
import { IonicSelectableSearchFailTemplateDirective } from './ionic-selectable-search-fail-template.directive';
import { IonicSelectableTitleTemplateDirective } from './ionic-selectable-title-template.directive';
import { IonicSelectableValueTemplateDirective } from './ionic-selectable-value-template.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableComponent,
    IonicSelectableAddItemTemplateDirective,
    IonicSelectableCloseButtonTemplateDirective,
    IonicSelectableFooterTemplateDirective,
    IonicSelectableGroupEndTemplateDirective,
    IonicSelectableGroupTemplateDirective,
    IonicSelectableHeaderTemplateDirective,
    IonicSelectableIconTemplateDirective,
    IonicSelectableItemEndTemplateDirective,
    IonicSelectableItemIconTemplateDirective,
    IonicSelectableItemTemplateDirective,
    IonicSelectableMessageTemplateDirective,
    IonicSelectableModalComponent,
    IonicSelectablePlaceholderTemplateDirective,
    IonicSelectableSearchFailTemplateDirective,
    IonicSelectableTitleTemplateDirective,
    IonicSelectableValueTemplateDirective
  ],
  exports: [
    IonicSelectableComponent,
    IonicSelectableAddItemTemplateDirective,
    IonicSelectableCloseButtonTemplateDirective,
    IonicSelectableFooterTemplateDirective,
    IonicSelectableGroupEndTemplateDirective,
    IonicSelectableGroupTemplateDirective,
    IonicSelectableHeaderTemplateDirective,
    IonicSelectableIconTemplateDirective,
    IonicSelectableItemEndTemplateDirective,
    IonicSelectableItemIconTemplateDirective,
    IonicSelectableItemTemplateDirective,
    IonicSelectableMessageTemplateDirective,
    IonicSelectableModalComponent,
    IonicSelectablePlaceholderTemplateDirective,
    IonicSelectableSearchFailTemplateDirective,
    IonicSelectableTitleTemplateDirective,
    IonicSelectableValueTemplateDirective
  ]
})
export class IonicSelectableModule { }
