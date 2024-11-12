var members = ['daniel', 'thomas', 'kevin'];
console.log(members[1]);

var i = 0;
while(i<members.length){
  console.log('array loop => ', members[i]);
  i += 1;
}

var roles = {
  'student' : 'daniel',
  'photographer' : 'thomas',
  'developer' : 'kevin'
}
console.log(roles.student);
console.log(roles['developer']);

for (name in roles) {
  console.log('object => ', name, 'values => ', roles[name]);
}
