export class FilterForm {
    
    departments: boolean[];
    // gender: number;
    searchBy: SearchBy;

    constructor(
        
        departments: boolean[],
        // gender: number,
        searchBy: SearchBy,
    ) {
        
        this.departments = departments;
        // this.gender = gender;
        this.searchBy = searchBy;
    }
}

export class SearchBy {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;

    constructor(
        firstname: string,
        lastname: string,
        email: string,
        mobile: string
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobile = mobile;
    }
}