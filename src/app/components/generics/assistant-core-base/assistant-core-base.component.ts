import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
   selector: 'app-assistant-core-base',
   templateUrl: './assistant-core-base.component.html',
   styleUrls: ['./assistant-core-base.component.scss'],
})
export class AssistantCoreBaseComponent {
   // loading: accepted values like 'true | false';
   @Input() loading: boolean = false

   // disabled: accepted values like 'true | false';
   @Input() disabled: boolean = false

   // type: accepted values like 'primary | primary2 | primary3 | secondary | secondary2 | secondary3 | third | third2 | third3 | alert | alert2 | alert3 | confirm | confirm2 | confirm3 | other | other2 | other3';
   @Input() type: string = 'primary'

   // size: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() size: string = 'm'

   // border-radius: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() radius: string = 'm'

   // padding: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() padding: string = 'm'

   // rotation: accepted values like '0 | 90 | 180 | 270';
   @Input() rotation: number = 0

   // icon: accepted values like 'pi-cog';
   @Input() icon: string = ''

   // tooltip: accepted values like 'my tooltip string';
   @Input() tooltip: string = ''

   // placeholder: accepted values like 'my placeholder string';
   @Input() placeholder: string = ''

   // autocomplete: accepted values like 'my autocomplete string';
   @Input() autocomplete: string = ''

   // control: accepted form-control;
   @Input() control!: any

   // kind: accepted values like 'text | password';
   @Input() kind: string = 'text'

   // required: accepted values like 'true | false';
   @Input() required: boolean = false

   // key: accepted values like 'my key string';
   @Input() key: string = ''

   // label: accepted values like 'my label string';
   @Input() label: string = ''

   // labelSize: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() labelSize: string = 'm'

   // inputSize: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() inputSize: string = 'm'

   // title: accepted values like 'my title string';
   @Input() title: string = ''

   // title size: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() titleSize: string = 'm'

   // description: accepted values like 'my description string';
   @Input() description: string = ''

   // description size: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() descriptionSize: string = 'm'

   // font color: accepted values like 'primary | secondary | third | alert | confirm | other | text1 | text2 | text3 | text4';
   @Input() fontColor: string = ''

   // font size: accepted values like 'xxs | xs | s | m | l | xl';
   @Input() fontSize: string = ''

   // uppercase: accepted values like 'true | false';
   @Input() uppercase: boolean = false

   // bold: accepted values like 'true | false';
   @Input() bold: boolean = false

   // conceal: accepted values like 'true | false';
   @Input() conceal: boolean = false

   // i18nLabel: accepted values like 'assistant.ng.common.login';
   @Input() i18nLabel: string = ''

   // wrap: accepted values like 'true | false';
   @Input() wrap: boolean = false

   // contentAlign: accepted values like 'true | false';
   @Input() contentAlign: string = 'left'

   // conceal: accepted values like 'true | false';
   @Input() clickable: boolean = false

   // wrap: accepted values like 'true | false';
   @Input() hideBodySidePadding: boolean = false

   // wrap: accepted values like 'true | false';
   @Input() hideBodyVPadding: boolean = false

   // font size: accepted values like 'xxs | xs | s | m | l | xl | xxl';
   @Input() leftSize: string = 'm'

   // verticalExcess: accepted values like '100px';
   @Input() verticalExcess: string = ''

   // ellipsis: accepted like 'true | false';
   @Input() ellipsis: boolean = false

   // maxWidth: accepted values like '370px';
   @Input() maxWidth: string = ''

   // minWidth: accepted values like '130px';
   @Input() minWidth: string = ''

   // isLoading: accepted values like 'true | false';
   @Input() isLoading: boolean = true

   // direction: accepted values like 'row | column';
   @Input() itemDirection: string = ''

   // border: accepted values like 'true | false';
   @Input() border: boolean = false

   // groupName: accepted values like 'myRadioButtonGroup';
   @Input() groupName: string = 'assistantInputGroup'

   // labelSide: accepted values like 'left | right' to invert label order;
   @Input() labelSide: string = 'right'

   // canMinimize: accepted values like 'true | false';
   @Input() canMinimize: boolean = false

   // noData: accepted values like 'true | false';
   @Input() noData: boolean = false

   // noDataLabel: accepted values like 'my no data label';
   @Input() noDataLabel: string = ''

   @Output() click = new EventEmitter()

   @Output() change = new EventEmitter<string | number>()
}
