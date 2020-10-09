const x = {
  name: 'joel',
  age: 23,
  print: function(){
    console.log(x.name);
  }
}; 
x.print.call({name:'Fernandez'});
