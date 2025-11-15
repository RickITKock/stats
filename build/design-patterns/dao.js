"use strict";
class Student {
    constructor(name, rollNo) { }
}
class StudentDaoImpl {
    constructor() {
        this.students = [
            new Student("Chris", 1),
            new Student("Laura", 2),
        ];
    }
    getAllStudents() {
        return this.students;
    }
}
