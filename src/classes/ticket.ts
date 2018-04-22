export class Ticket {                               // this is the same thing as a ticket to freshdesk
    subject: string;                                // This is the subject line in the ticket
    name: string;                                   // the name of the requestor
    description: string;                            // the string details of the basket, this is a combined string of "items"
    priority: number;                               // default to 3
    status: number;                                 // default to 3
    email: string;
    custom_fields:{
        cf_requester_phone_number: string,          // the requestor's phone number
        cf_requestor_address: string                // the requestors full address
    }
}