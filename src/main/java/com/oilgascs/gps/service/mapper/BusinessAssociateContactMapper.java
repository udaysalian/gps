package com.oilgascs.gps.service.mapper;

import com.oilgascs.gps.domain.*;
import com.oilgascs.gps.service.dto.BusinessAssociateContactDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity BusinessAssociateContact and its DTO BusinessAssociateContactDTO.
 */
@Mapper(componentModel = "spring", uses = {BusinessAssociateMapper.class, ContactMapper.class, BusinessAssociateAddressMapper.class})
public interface BusinessAssociateContactMapper extends EntityMapper<BusinessAssociateContactDTO, BusinessAssociateContact> {

    @Mapping(source = "businessAssociate.id", target = "businessAssociateId")
    @Mapping(source = "businessAssociate.baAbbr", target = "businessAssociateBaAbbr")
    @Mapping(source = "contact.id", target = "contactId")
    @Mapping(source = "mailAddress.id", target = "mailAddressId")
    @Mapping(source = "deliveryAddress.id", target = "deliveryAddressId")
    BusinessAssociateContactDTO toDto(BusinessAssociateContact businessAssociateContact);

    @Mapping(source = "businessAssociateId", target = "businessAssociate")
    @Mapping(source = "contactId", target = "contact")
    @Mapping(source = "mailAddressId", target = "mailAddress")
    @Mapping(source = "deliveryAddressId", target = "deliveryAddress")
    BusinessAssociateContact toEntity(BusinessAssociateContactDTO businessAssociateContactDTO);

    default BusinessAssociateContact fromId(Long id) {
        if (id == null) {
            return null;
        }
        BusinessAssociateContact businessAssociateContact = new BusinessAssociateContact();
        businessAssociateContact.setId(id);
        return businessAssociateContact;
    }
}
