class Staff {
  constructor(fullname, email) {
    this.fullname = fullname;
    this.email = email;
  }
  setfullname(fullname) {
    this.fullname = fullname;
  }
  setemail(email) {
    this.email = email;
  }
  getemail() {
    return this.email;
  }
  toString() {
    return `${this.fullname} - ${this.email}`;
  }
}
let person1 = new Staff("David", "david@gmail.com");
person1.setfullname("David Do");
person1.setemail("david.do@gmail.com");
console.log(person1.toString());
let person2 = new Staff("John", "John@gmail.com");
let person3 = new Staff("Terry", "Terry@gmail.com");
let groupStaff = [person1, person2, person3];
for (let i = 0; i < groupStaff.length; i++) {
  console.log(groupStaff[i].toString());
}
