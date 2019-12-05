export interface InvoiceData {
    InvoiceID: number;
    AgencyID: number;
    PrimaryAgencyName: string;
    PhysicalAddressLine1: string;
    PhysicalAddressLine2: string;
    PhysicalCity: string;
    PhysicalStateID: number;
    PhysicalZipCode: number;
    SecondaryAgencyName: string;
    MailingAddressLine1: string;
    MailingAddressLine2: string;
    MailingCity: string;
    MailingStateID: number;
    MailingZipCode: number;
    FiscalYear: number;
    SequenceCode: string;
    SequenceNumber: number;
    MVDocsInvoiceID: string;
    MVDocsApplicaitonID: string;
    ControlNumber: string;
    StatusID: number;
    IssueDate: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    InvoiceTypeID: number;
    ShippingInvoiceNumber: number;
    ShippingTypeID: number;
}