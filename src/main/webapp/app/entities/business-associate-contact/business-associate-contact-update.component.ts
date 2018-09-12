import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IBusinessAssociateContact } from 'app/shared/model/business-associate-contact.model';
import { BusinessAssociateContactService } from './business-associate-contact.service';
import { IBusinessAssociate } from 'app/shared/model/business-associate.model';
import { BusinessAssociateService } from 'app/entities/business-associate';
import { IContact } from 'app/shared/model/contact.model';
import { ContactService } from 'app/entities/contact';
import { IBusinessAssociateAddress } from 'app/shared/model/business-associate-address.model';
import { BusinessAssociateAddressService } from 'app/entities/business-associate-address';

@Component({
    selector: 'jhi-business-associate-contact-update',
    templateUrl: './business-associate-contact-update.component.html'
})
export class BusinessAssociateContactUpdateComponent implements OnInit {
    private _businessAssociateContact: IBusinessAssociateContact;
    isSaving: boolean;

    businessassociates: IBusinessAssociate[];

    contacts: IContact[];

    mailaddresses: IBusinessAssociateAddress[];

    deliveryaddresses: IBusinessAssociateAddress[];
    beginDateDp: any;
    endDateDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private businessAssociateContactService: BusinessAssociateContactService,
        private businessAssociateService: BusinessAssociateService,
        private contactService: ContactService,
        private businessAssociateAddressService: BusinessAssociateAddressService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ businessAssociateContact }) => {
            this.businessAssociateContact = businessAssociateContact;
        });
        this.businessAssociateService.query({ filter: 'businessassociatecontact-is-null' }).subscribe(
            (res: HttpResponse<IBusinessAssociate[]>) => {
                if (!this.businessAssociateContact.businessAssociateId) {
                    this.businessassociates = res.body;
                } else {
                    this.businessAssociateService.find(this.businessAssociateContact.businessAssociateId).subscribe(
                        (subRes: HttpResponse<IBusinessAssociate>) => {
                            this.businessassociates = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.contactService.query({ filter: 'businessassociatecontact-is-null' }).subscribe(
            (res: HttpResponse<IContact[]>) => {
                if (!this.businessAssociateContact.contactId) {
                    this.contacts = res.body;
                } else {
                    this.contactService.find(this.businessAssociateContact.contactId).subscribe(
                        (subRes: HttpResponse<IContact>) => {
                            this.contacts = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.businessAssociateAddressService.query({ filter: 'businessassociatecontact-is-null' }).subscribe(
            (res: HttpResponse<IBusinessAssociateAddress[]>) => {
                if (!this.businessAssociateContact.mailAddressId) {
                    this.mailaddresses = res.body;
                } else {
                    this.businessAssociateAddressService.find(this.businessAssociateContact.mailAddressId).subscribe(
                        (subRes: HttpResponse<IBusinessAssociateAddress>) => {
                            this.mailaddresses = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.businessAssociateAddressService.query({ filter: 'businessassociatecontact-is-null' }).subscribe(
            (res: HttpResponse<IBusinessAssociateAddress[]>) => {
                if (!this.businessAssociateContact.deliveryAddressId) {
                    this.deliveryaddresses = res.body;
                } else {
                    this.businessAssociateAddressService.find(this.businessAssociateContact.deliveryAddressId).subscribe(
                        (subRes: HttpResponse<IBusinessAssociateAddress>) => {
                            this.deliveryaddresses = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.businessAssociateContact.id !== undefined) {
            this.subscribeToSaveResponse(this.businessAssociateContactService.update(this.businessAssociateContact));
        } else {
            this.subscribeToSaveResponse(this.businessAssociateContactService.create(this.businessAssociateContact));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IBusinessAssociateContact>>) {
        result.subscribe(
            (res: HttpResponse<IBusinessAssociateContact>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError()
        );
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackBusinessAssociateById(index: number, item: IBusinessAssociate) {
        return item.id;
    }

    trackContactById(index: number, item: IContact) {
        return item.id;
    }

    trackBusinessAssociateAddressById(index: number, item: IBusinessAssociateAddress) {
        return item.id;
    }
    get businessAssociateContact() {
        return this._businessAssociateContact;
    }

    set businessAssociateContact(businessAssociateContact: IBusinessAssociateContact) {
        this._businessAssociateContact = businessAssociateContact;
    }
}
