package com.oilgascs.gps.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Activity.
 */
@Entity
@Table(name = "activity")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Activity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "contr_id")
    private String contrId;

    @Column(name = "activity_nbr")
    private String activityNbr;

    @Column(name = "updater")
    private String updater;

    @Column(name = "update_time_stamp")
    private ZonedDateTime updateTimeStamp;

    @Column(name = "business_unit")
    private String businessUnit;

    @OneToOne
    @JoinColumn(unique = true)
    private RateSched rtSched;

    @OneToOne
    @JoinColumn(unique = true)
    private MeasurementStation receiptLocation;

    @OneToOne
    @JoinColumn(unique = true)
    private MeasurementStation deliveryLocation;

    @OneToOne
    @JoinColumn(unique = true)
    private Contract upstreamContract;

    @OneToOne
    @JoinColumn(unique = true)
    private Contract downstreamContract;

    @OneToOne
    @JoinColumn(unique = true)
    private BusinessAssociate upstreamBA;

    @OneToOne
    @JoinColumn(unique = true)
    private BusinessAssociate downstreamBA;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContrId() {
        return contrId;
    }

    public Activity contrId(String contrId) {
        this.contrId = contrId;
        return this;
    }

    public void setContrId(String contrId) {
        this.contrId = contrId;
    }

    public String getActivityNbr() {
        return activityNbr;
    }

    public Activity activityNbr(String activityNbr) {
        this.activityNbr = activityNbr;
        return this;
    }

    public void setActivityNbr(String activityNbr) {
        this.activityNbr = activityNbr;
    }

    public String getUpdater() {
        return updater;
    }

    public Activity updater(String updater) {
        this.updater = updater;
        return this;
    }

    public void setUpdater(String updater) {
        this.updater = updater;
    }

    public ZonedDateTime getUpdateTimeStamp() {
        return updateTimeStamp;
    }

    public Activity updateTimeStamp(ZonedDateTime updateTimeStamp) {
        this.updateTimeStamp = updateTimeStamp;
        return this;
    }

    public void setUpdateTimeStamp(ZonedDateTime updateTimeStamp) {
        this.updateTimeStamp = updateTimeStamp;
    }

    public String getBusinessUnit() {
        return businessUnit;
    }

    public Activity businessUnit(String businessUnit) {
        this.businessUnit = businessUnit;
        return this;
    }

    public void setBusinessUnit(String businessUnit) {
        this.businessUnit = businessUnit;
    }

    public RateSched getRtSched() {
        return rtSched;
    }

    public Activity rtSched(RateSched rateSched) {
        this.rtSched = rateSched;
        return this;
    }

    public void setRtSched(RateSched rateSched) {
        this.rtSched = rateSched;
    }

    public MeasurementStation getReceiptLocation() {
        return receiptLocation;
    }

    public Activity receiptLocation(MeasurementStation measurementStation) {
        this.receiptLocation = measurementStation;
        return this;
    }

    public void setReceiptLocation(MeasurementStation measurementStation) {
        this.receiptLocation = measurementStation;
    }

    public MeasurementStation getDeliveryLocation() {
        return deliveryLocation;
    }

    public Activity deliveryLocation(MeasurementStation measurementStation) {
        this.deliveryLocation = measurementStation;
        return this;
    }

    public void setDeliveryLocation(MeasurementStation measurementStation) {
        this.deliveryLocation = measurementStation;
    }

    public Contract getUpstreamContract() {
        return upstreamContract;
    }

    public Activity upstreamContract(Contract contract) {
        this.upstreamContract = contract;
        return this;
    }

    public void setUpstreamContract(Contract contract) {
        this.upstreamContract = contract;
    }

    public Contract getDownstreamContract() {
        return downstreamContract;
    }

    public Activity downstreamContract(Contract contract) {
        this.downstreamContract = contract;
        return this;
    }

    public void setDownstreamContract(Contract contract) {
        this.downstreamContract = contract;
    }

    public BusinessAssociate getUpstreamBA() {
        return upstreamBA;
    }

    public Activity upstreamBA(BusinessAssociate businessAssociate) {
        this.upstreamBA = businessAssociate;
        return this;
    }

    public void setUpstreamBA(BusinessAssociate businessAssociate) {
        this.upstreamBA = businessAssociate;
    }

    public BusinessAssociate getDownstreamBA() {
        return downstreamBA;
    }

    public Activity downstreamBA(BusinessAssociate businessAssociate) {
        this.downstreamBA = businessAssociate;
        return this;
    }

    public void setDownstreamBA(BusinessAssociate businessAssociate) {
        this.downstreamBA = businessAssociate;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Activity activity = (Activity) o;
        if (activity.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), activity.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Activity{" +
            "id=" + getId() +
            ", contrId='" + getContrId() + "'" +
            ", activityNbr='" + getActivityNbr() + "'" +
            ", updater='" + getUpdater() + "'" +
            ", updateTimeStamp='" + getUpdateTimeStamp() + "'" +
            ", businessUnit='" + getBusinessUnit() + "'" +
            "}";
    }
}
