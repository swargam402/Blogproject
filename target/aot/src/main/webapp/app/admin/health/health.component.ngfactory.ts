/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../../../../../src/main/webapp/app/admin/health/health.component';
import * as import3 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as import4 from '../../../../../../../../src/main/webapp/app/admin/health/health.service';
const styles_JhiHealthCheckComponent:any[] = ([] as any[]);
export const RenderType_JhiHealthCheckComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_JhiHealthCheckComponent,
  data: {}
}
);
function View_JhiHealthCheckComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'hand'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.showHealth(v.parent.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-eye'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        ']))
  ]
  ,(null as any),(null as any));
}
function View_JhiHealthCheckComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),19,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'text-capitalize'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),[
      ' ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'td',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',[[
        'class',
        'badge'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),[
      '\n                            ',
      '\n                        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'td',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiHealthCheckComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_2:any = 'badge';
    const currVal_3:any = co.getBadgeClass(v.context.$implicit.status);
    ck(v,10,0,currVal_2,currVal_3);
    const currVal_5:any = (v.context.$implicit.details || v.context.$implicit.error);
    ck(v,17,0,currVal_5);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.baseName(v.context.$implicit.name);
    ck(v,4,0,currVal_0);
    const currVal_1:any = co.subSystemName(v.context.$implicit.name);
    ck(v,5,0,currVal_1);
    const currVal_4:any = v.context.$implicit.status;
    ck(v,11,0,currVal_4);
  });
}
export function View_JhiHealthCheckComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),42,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),12,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Health Checks'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'button',[[
        'class',
        'btn btn-primary float-right'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.JhiHealthCheckComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.refresh()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'fa fa-refresh'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[' '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Refresh'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'div',[[
        'class',
        'table-responsive'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),22,'table',[
      [
        'class',
        'table table-striped'
      ]
      ,
      [
        'id',
        'healthCheck'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'thead',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Service Name'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Status'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Details'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiHealthCheckComponent_1)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.JhiHealthCheckComponent = v.component;
    const currVal_0:any = co.healthData;
    ck(v,38,0,currVal_0);
  },(null as any));
}
function View_JhiHealthCheckComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-health',([] as any[]),(null as any),(null as any),(null as any),View_JhiHealthCheckComponent_0,RenderType_JhiHealthCheckComponent)),
    import0.ɵdid(57344,(null as any),0,import2.JhiHealthCheckComponent,[
      import3.NgbModal,
      import4.JhiHealthService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const JhiHealthCheckComponentNgFactory:import0.ComponentFactory<import2.JhiHealthCheckComponent> = import0.ɵccf('jhi-health',import2.JhiHealthCheckComponent,View_JhiHealthCheckComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvY3lyaWwvUHJvamVjdHMvQmxvZy9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvY3lyaWwvUHJvamVjdHMvQmxvZy9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9jeXJpbC9Qcm9qZWN0cy9CbG9nL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvY3lyaWwvUHJvamVjdHMvQmxvZy9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzLkpoaUhlYWx0aENoZWNrQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdj5cbiAgICA8aDI+XG4gICAgICAgIDxzcGFuPkhlYWx0aCBDaGVja3M8L3NwYW4+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiAoY2xpY2spPVwicmVmcmVzaCgpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIj48L3NwYW4+IDxzcGFuPlJlZnJlc2g8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRhYmxlIGlkPVwiaGVhbHRoQ2hlY2tcIiBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TZXJ2aWNlIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+RGV0YWlsczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBoZWFsdGggb2YgaGVhbHRoRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyBiYXNlTmFtZShoZWFsdGgubmFtZSkgfX08L3NwYW4+IHt7c3ViU3lzdGVtTmFtZShoZWFsdGgubmFtZSl9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgW25nQ2xhc3NdPVwiZ2V0QmFkZ2VDbGFzcyhoZWFsdGguc3RhdHVzKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aGVhbHRoLnN0YXR1c319XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImhhbmRcIiAoY2xpY2spPVwic2hvd0hlYWx0aChoZWFsdGgpXCIgKm5nSWY9XCJoZWFsdGguZGV0YWlscyB8fCBoZWFsdGguZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIiwiPGpoaS1oZWFsdGg+PC9qaGktaGVhbHRoPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN5QndCO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBZ0I7UUFBQTtRQUFBO01BQUE7TUFBaEI7SUFBQTtJQUFvRjtNQUNoRjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCOzs7Ozs7SUFUckM7SUFBc0M7SUFDbEM7TUFBSTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBa0M7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFvQztNQUN4RztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO01BQ3BCO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBNkQ7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUV0RDtJQUNOO01BQ0w7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUNwQjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRUk7SUFDSDs7OztJQVJLO0lBQWM7SUFBcEIsVUFBTSxVQUFjLFNBQXBCO0lBSzZDO0lBQTdDLFVBQTZDLFNBQTdDOzs7SUFQOEI7SUFBQTtJQUFrQztJQUFBO0lBRUg7SUFBQTs7Ozs7SUFwQnJGO0lBQUs7SUFDRDtJQUFJO0lBQ0E7SUFBTTtJQUFvQjtNQUMxQjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQTRDO1FBQUE7UUFBQTtNQUFBO01BQTVDO0lBQUE7SUFBZ0U7TUFDNUQ7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFtQztJQUFDO0lBQU07SUFBYztJQUNuRDtJQUNSO01BQ0w7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtJQUMxQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBb0Q7SUFDaEQ7SUFBTztJQUNIO0lBQUk7SUFDQTtJQUFJO0lBQWlCO01BQ3JCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFBVztNQUNuQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQVk7SUFDbkM7SUFDRDtJQUNSO0lBQU87SUFDSDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQVlLO0lBQ0Q7SUFDSjtJQUNOO0lBQ0o7Ozs7SUFoQmM7SUFBSixVQUFJLFNBQUo7Ozs7O0lDakJoQjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
