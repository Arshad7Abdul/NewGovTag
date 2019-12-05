import { LutJurisdiction } from "./LutJurisdiction";

export class LutAgency {
    AgencyId: number;
    AgencyNumber: string;
    ApplicationTypeId: number;
    AgencyName: string;
    RevisedAgencyName: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    Zip: string;
    StateId: number;
    EffectiveDate: Date;
    EndDate: Date;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    State: LutJurisdiction;
}