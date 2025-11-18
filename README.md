***1.What are some differences between interfaces and types in TypeScript?***
| **SL** | **Interface**                                   | **Type**                                                         |
| 1 | ----------------------------------------------- | ---------------------------------------------------------------- |
| 2 |  Object structure নির্ধারণে ব্যবহার হয়      | Object ছাড়াও union primitive ইত্যাদি সবকিছুতে ব্যবহার হয় |
| 3 | `extends` ব্যবহার করে extend করা যায়            | `&` intersection দিয়ে extend করা যায়                             |
| 4 |  এক interface বারবার লিখলে merge হয় | type merge করা যায় না                                  |
| 5 |  union বানানো যায় না                    | ২ বা তার অধিক union  করা যায়                         |
| 6 | Props and component structures-এ বেশি ব্যবহার হয়  | Utility type, union, complex compositions-এ  ব্যবহার হয়      |


# 1 TypeScript Interface vs Type Differences

| SL | Interface | Type |
|----|-----------|------|
| 1 | Object structure নির্ধারণে ব্যবহার হয় | Object ছাড়াও union, primitive ইত্যাদি সবকিছুতে ব্যবহার হয় |
| 2 | `extends` ব্যবহার করে extend করা যায় | `&` intersection দিয়ে extend করা যায় |
| 3 | এক interface বারবার লিখলে merge হয় | type merge করা যায় না |
| 4 | union বানানো যায় না | ২ বা তার অধিক type union করা যায় |
| 5 | Props and component structures-এ বেশি ব্যবহার হয় | Utility type, union, complex compositions-এ ব্যবহার হয় |
| 6 | Class-এ `implements` করা যায় | Class-এ `implements` করা যায় |
| 7 | Performance-wise slightly better | Complex type operations-এ বেশি flexible |


***5.Provide an example of using union and intersection types in TypeScript.***

    Example Of Union:
        type strngUnionNum = string | number;
        type Student = {
            Roll: number;
            Name: string;
            Address:string;
        }

        type Teacher = {
            TeacherID:number;
            Name:string;
            Subject:string;
        }

        type StudentUnionTeacher = Student | Teacher;

    Example of Intersection:

        type strngInterNum = string & number;

        type Student = {
            Roll: number;
            Name: string;
            Address:string;
        }

        type Teacher = {
            TeacherID:number;
            Name:string;
            Subject:string;
        }

        type StudentInterTeacher = Student & Teacher;
