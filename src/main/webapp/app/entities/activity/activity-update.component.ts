import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';

import { IActivity } from 'app/shared/model/activity.model';
import { ActivityService } from './activity.service';
import { IRateSched } from 'app/shared/model/rate-sched.model';
import { RateSchedService } from 'app/entities/rate-sched';
import { IMeasurementStation } from 'app/shared/model/measurement-station.model';
import { MeasurementStationService } from 'app/entities/measurement-station';
import { IContract } from 'app/shared/model/contract.model';
import { ContractService } from 'app/entities/contract';
import { IBusinessAssociate } from 'app/shared/model/business-associate.model';
import { BusinessAssociateService } from 'app/entities/business-associate';

@Component({
    selector: 'jhi-activity-update',
    templateUrl: './activity-update.component.html'
})
export class ActivityUpdateComponent implements OnInit {
    private _activity: IActivity;
    isSaving: boolean;

    rtscheds: IRateSched[];

    receiptlocations: IMeasurementStation[];

    deliverylocations: IMeasurementStation[];

    upstreamcontracts: IContract[];

    downstreamcontracts: IContract[];

    upstreambas: IBusinessAssociate[];

    downstreambas: IBusinessAssociate[];
    updateTimeStamp: string;

    constructor(
        private jhiAlertService: JhiAlertService,
        private activityService: ActivityService,
        private rateSchedService: RateSchedService,
        private measurementStationService: MeasurementStationService,
        private contractService: ContractService,
        private businessAssociateService: BusinessAssociateService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ activity }) => {
            this.activity = activity;
        });
        this.rateSchedService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IRateSched[]>) => {
                if (!this.activity.rtSchedId) {
                    this.rtscheds = res.body;
                } else {
                    this.rateSchedService.find(this.activity.rtSchedId).subscribe(
                        (subRes: HttpResponse<IRateSched>) => {
                            this.rtscheds = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.measurementStationService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IMeasurementStation[]>) => {
                if (!this.activity.receiptLocationId) {
                    this.receiptlocations = res.body;
                } else {
                    this.measurementStationService.find(this.activity.receiptLocationId).subscribe(
                        (subRes: HttpResponse<IMeasurementStation>) => {
                            this.receiptlocations = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.measurementStationService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IMeasurementStation[]>) => {
                if (!this.activity.deliveryLocationId) {
                    this.deliverylocations = res.body;
                } else {
                    this.measurementStationService.find(this.activity.deliveryLocationId).subscribe(
                        (subRes: HttpResponse<IMeasurementStation>) => {
                            this.deliverylocations = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.contractService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IContract[]>) => {
                if (!this.activity.upstreamContractId) {
                    this.upstreamcontracts = res.body;
                } else {
                    this.contractService.find(this.activity.upstreamContractId).subscribe(
                        (subRes: HttpResponse<IContract>) => {
                            this.upstreamcontracts = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.contractService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IContract[]>) => {
                if (!this.activity.downstreamContractId) {
                    this.downstreamcontracts = res.body;
                } else {
                    this.contractService.find(this.activity.downstreamContractId).subscribe(
                        (subRes: HttpResponse<IContract>) => {
                            this.downstreamcontracts = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.businessAssociateService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IBusinessAssociate[]>) => {
                if (!this.activity.upstreamBAId) {
                    this.upstreambas = res.body;
                } else {
                    this.businessAssociateService.find(this.activity.upstreamBAId).subscribe(
                        (subRes: HttpResponse<IBusinessAssociate>) => {
                            this.upstreambas = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.businessAssociateService.query({ filter: 'activity-is-null' }).subscribe(
            (res: HttpResponse<IBusinessAssociate[]>) => {
                if (!this.activity.downstreamBAId) {
                    this.downstreambas = res.body;
                } else {
                    this.businessAssociateService.find(this.activity.downstreamBAId).subscribe(
                        (subRes: HttpResponse<IBusinessAssociate>) => {
                            this.downstreambas = [subRes.body].concat(res.body);
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
        this.activity.updateTimeStamp = moment(this.updateTimeStamp, DATE_TIME_FORMAT);
        if (this.activity.id !== undefined) {
            this.subscribeToSaveResponse(this.activityService.update(this.activity));
        } else {
            this.subscribeToSaveResponse(this.activityService.create(this.activity));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IActivity>>) {
        result.subscribe((res: HttpResponse<IActivity>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackRateSchedById(index: number, item: IRateSched) {
        return item.id;
    }

    trackMeasurementStationById(index: number, item: IMeasurementStation) {
        return item.id;
    }

    trackContractById(index: number, item: IContract) {
        return item.id;
    }

    trackBusinessAssociateById(index: number, item: IBusinessAssociate) {
        return item.id;
    }
    get activity() {
        return this._activity;
    }

    set activity(activity: IActivity) {
        this._activity = activity;
        this.updateTimeStamp = moment(activity.updateTimeStamp).format(DATE_TIME_FORMAT);
    }
}
