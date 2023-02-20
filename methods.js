function main(){
    var name=(prompt("enter name"));
    var number=parseInt(prompt("enter phone number"));


function contact(name,number){
    this.name=name;
    this.number=number;
//addding the print() method to the object
    this.print=function(){
        console.log(name+":"+number);
    }
}

var a=new contact(name, number);

a.print();

}
main();



    