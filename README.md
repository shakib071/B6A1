

# 1. TypeScript Interface vs Type Differences

| SL | Interface | Type |
|----|-----------|------|
| 1 | Object structure নির্ধারণে ব্যবহার হয় | Object ছাড়াও union, primitive ইত্যাদি সবকিছুতে ব্যবহার হয় |
| 2 | `extends` ব্যবহার করে extend করা যায় | `&` intersection দিয়ে extend করা যায় |
| 3 | এক interface বারবার লিখলে merge হয় | type merge করা যায় না |
| 4 | union বানানো যায় না | ২ বা তার অধিক type union করা যায় |
| 5 |  OOP স্টাইলে ডিজাইনের জন্য উপযুক্ত | ফাংশনাল প্রোগ্রামিং স্টাইলের জন্য উপযুক্ত |



# 5.Provide an example of using union and intersection types in TypeScript.

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
