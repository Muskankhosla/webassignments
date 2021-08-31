const input=document.querySelector('input')
const ul=document.querySelector('ul');
let arr=[];
input.addEventListener('keyup',(e)=>{
    add(e.keyCode);
});
function add(x){
    if(x==13){
        arr.push(input.value)
        input.value="";
    }
    print();
    
}
function print(){
    ul.innerHTML="";
    for(var i=0;i<arr.length;i++){
        var item=arr[i];
        var li=document.createElement("li");
        li.value=i;
        li.innerHTML=`
            <div class="container">
            <div class="outer_div">
                <div class="list_item">
                    <span> ${item}</span>
                </div>
                <div class="list_icon">
                    <button onclick="edit(${i})" ><i class="fas fa-edit"></i></button>
                    <button onclick="trash(${i})" ><i class="fas fa-trash-alt"></i></button>
                    <button onclick="up(${i})" ><i class="far fa-arrow-alt-circle-up"></i></button>
                    <button onclick="down(${i})" ><i class="far fa-arrow-alt-circle-down"></i></button>
                </div>
            </div>
        </div>
        `;
        ul.appendChild(li);

    }
}
function edit(x){
    var person = prompt("Please enter new value", `${arr[x]}`);
    if (person != null) {
        arr[x]=person;
        print();
    }
}
function trash(x){
    if(x==arr.length){
        arr.pop();
    }
    else{
        arr.splice(x,1);
    }
    print();
        
}
function up(x){
    if(x>0){
        var temp=arr[x];
        arr[x]=arr[x-1];
        arr[x-1]=temp;
        print();
    }
    
    
}
function down(x){
    if(x<arr.length-1){
        var temp=arr[x];
        arr[x]=arr[x+1];
        arr[x+1]=temp;
        print();
    }
}