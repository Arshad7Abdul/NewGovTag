import { GovRegistration } from "./GovRegistration";
import { GovStatus } from "./GovStatus";
import { GovInvoiceType } from "./GovInvoiceType";
import { LutAgency } from "./LutAgency";

export class GovInvoice {
    InvoiceId: number;
    AgencyId: number;
    PrimaryAgencyName: string;
    PhysicalAddressLine1: string;
    PhysicalAddressLine2: string;
    PhysicalCity: string;
    PhysicalStateId: number;
    PhysicalZipCode: string;
    SecondaryAgencyName: string;
    MailingAddressLine1: string;
    MailingAddressLine2: string;
    MailingCity: string;
    MailingStateId: number;
    MailingZipCode: string;
    FiscalYear: number;
    SequenceCode: string;
    SequenceNumber: number;
    MvdocsInvoiceId: string;
    MvdocsApplicaitonId: string;
    ControlNumber: string;
    StatusId: number;
    IssueDate: Date;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    InvoiceTypeId: number;
    ShippingInvoiceNumber: number;
    ShippingTypeId: number;

    
    Agency: LutAgency;
    InvoiceType: GovInvoiceType;
    Status: GovStatus;
    GovRegistration: GovRegistration;
}
