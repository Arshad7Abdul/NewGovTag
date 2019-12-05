export class Agency {
    constructor(public AgencyID: number,
        public AgencyNumber: string,
        public AgencyName: string,
        public EffectiveDate: Date,
        public EndDate: Date,
        public CreatedBy: string,
        public CreatedDate: Date,
        public UpdatedBy: string,
        public UpdatedDate: Date,
        public ApplicationTypeID: number,
        public CountyID: number,
        public IsAIMS: boolean){

    }
   
}
