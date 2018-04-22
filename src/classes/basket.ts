export class Basket {                               // this is the same thing as a ticket to freshdesk
    subject: string;                                // This is the subject line in the ticket
    name: string;                                   // the name of the requestor
    description: string;                            // the string details of the basket; everything goes in here
    priority: number;                               // default to 3
    status: number;                                 // default to 3
    custom_fields:{
        cf_requester_phone_number: string,          // the requestor's phone number
        cf_requestor_address: string                // the requestors full address
    }
  }
  
/*
{ 
	"description": "Ticket with custom fields...", 
	"subject": "Testing Custom Fields", 
	"email": "randyL@test.com", 
	"priority": 1, 
	"status": 2, 
	"cc_emails": ["test2@test.com","test@test.com"],
	"custom_fields":{
      "cf_requester_phone_number":"555-555-5555",
	  "cf_requestor_address": "1234 Main Street Boston, MA 12345"
  }
}
*/