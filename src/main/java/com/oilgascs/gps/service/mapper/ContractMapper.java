package com.oilgascs.gps.service.mapper;

import com.oilgascs.gps.domain.*;
import com.oilgascs.gps.service.dto.ContractDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Contract and its DTO ContractDTO.
 */
@Mapper(componentModel = "spring", uses = {BusinessAssociateMapper.class})
public interface ContractMapper extends EntityMapper<ContractDTO, Contract> {

    @Mapping(source = "busAssoc.id", target = "busAssocId")
    @Mapping(source = "busAssoc.baAbbr", target = "busAssocBaAbbr")
    ContractDTO toDto(Contract contract);

    @Mapping(target = "contrLocs", ignore = true)
    @Mapping(source = "busAssocId", target = "busAssoc")
    Contract toEntity(ContractDTO contractDTO);

    default Contract fromId(Long id) {
        if (id == null) {
            return null;
        }
        Contract contract = new Contract();
        contract.setId(id);
        return contract;
    }
}
