import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupsComponent } from './groups.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupsRoutingModule } from './groups-routing.module';
import { CustomMaterialModule } from 'src/app/material.module';
import {MatTreeModule} from '@angular/material/tree';
import { GroupmangementComponent, DynamicDatabase } from './groupmangement/groupmangement.component';
import { CreateUserGrpComponent } from './create-user-grp/create-user-grp.component';
import { EditGrpNameComponent } from './edit-grp-name/edit-grp-name.component';
import { GroupusrmanagementComponent } from './groupusrmanagement/groupusrmanagement.component';

@NgModule({
  declarations: [CreateGroupComponent, GroupsComponent,
    GroupmangementComponent, CreateUserGrpComponent, EditGrpNameComponent, GroupusrmanagementComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatTreeModule,
    GroupsRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [DynamicDatabase]
})
export class GroupsModule { }