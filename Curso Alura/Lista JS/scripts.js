<script>
  
function newTask(){

var input = document.getElementById('input--new-task')

if(!input.value){
  alert('Digite algo para inserir em sua lista!')
}
}

document.getElementById("btn-new-task").addEventListener("click", newTask);

</script>

