export class Resume {
    Id: number;
    Name: string;
    Description: string;
    Skills: string[];
    Experience: Experience[];
    Education: Education[];
    Email: string;
    Mobile: number;
      

}


export class Experience {
    Company: string;
    JobRole: string;
    JobDesc: string;
    JoinYear: number;
    LeaveYear: number;

}


export class Education {
    University: string;
    Degree: string;
    GPA: number;

}