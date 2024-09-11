function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  return subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty("excluded") === true) {
    return 0;
  }
  this.marks.push(...marksToAdd);

  return this.marks;
};

Student.prototype.getAverage = function () {
  let sum = 0;
  if (!this.marks?.length) {
    return 0;
  } else {
    sum = this.marks.reduce((sum, item) => sum + item, 0);
    return parseFloat((sum / this.marks.length).toFixed(2));
  }
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  if (!this.marks?.length) {
    delete this.marks;
    delete this.subject;
  }
  return this.excluded;
};

student1.setSubject("Algebra");
console.log(student1.getAverage()); 
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);

student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);