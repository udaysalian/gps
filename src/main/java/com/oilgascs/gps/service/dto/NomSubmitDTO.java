package com.oilgascs.gps.service.dto;

import java.util.Date;
import java.util.List;

public class NomSubmitDTO {
    private Date startDate;
    private Date endDate;
    private ContractDTO contract;
    private List<NominationDTO> submitNoms;

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public ContractDTO getContract() {
        return contract;
    }

    public void setContract(ContractDTO contract) {
        this.contract = contract;
    }

    public List<NominationDTO> getSubmitNoms() {
        return submitNoms;
    }

    public void setSubmitNoms(List<NominationDTO> submitNoms) {
        this.submitNoms = submitNoms;
    }
}
