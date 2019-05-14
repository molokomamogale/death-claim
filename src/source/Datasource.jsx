export const form = {
    policyNumber: null,
    policyType: null,
    form:
    {
        DeceasedDetails: {
            Person: {
                Initials: 'J',
                Firstname: 'Joe',
                Surname: 'Soap',
                IDnumber: '900909009080'
            },
            Death: {
                Date: '',
                Place: '',
                Cause: '',
                Reported: '',
                CaseNumber: ''
            },
            MedicalAid: {
                Scheme: '',
                Number: '',
            },
            TaxReferenceNumber: {},
            Executor: {
                Name: '',
                Email: '',
                ContactNumber: ''
            },
            Employed: '',
            Employer: '',
            Illness: '',
            Doctors: []
        },
        ClaimantsDetails: [],
        Signatures: {
            Place: '',
            Date: '',
            Claimant: [],
            Witness: ''
        },
        FinancialAdviser: {
            Name: '',
            ComissionCode: '',
            ContactNumbers: {
                Mobile: '',
                Work: '',
                Fax: '',
                Email: ''
            },
            Signature: ''
        },
        Checklist: []
    }
}

export const Claimant = {
    ReceiveMonthlyIncome: '',
    Person: {},
}

export const Person = {
    Initials: '',
    Firstnames: '',
    Surname: '',
    IDnumber: '',
    ContactNumbers: {
        Mobile: '',
        Work: '',
        Fax: ''
    },
    Residential: {
        Address: '',
        PostalCode: ''
    },
    Postal: {
        Address: '',
        PostalCode: ''
    },
    Emigrated: '',
    Relationship: '',
    NeedFA: '',
    BankingDetails: {}
}

export const BankingDetails = {
    Bank: '',
    Account: {
        Holder: '',
        Number: '',
        Type: '',
        Relationship: ''
    },
    Branch: {
        Name: '',
        Code: ''
    },
}