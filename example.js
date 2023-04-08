// 유저가 값을 입력한다
// +버튼을 클릭하면 할 일이 추가 된다.
// 유저가 del버튼을 누르면 할 일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑줄
// 1.check 버튼을 클릭하는 순간 isComplete:true
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false면 안끝난것 그대로

// 진행중 끝남 탭을 누르면 언더바가 이동
// 끝남탭은 끝난 아이템만 , 진행중 탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];   // 할 일을 넣을 리스트 -> 배열로 생성

addButton.addEventListener("click",addTask);

function addTask() {
  //필요한 관련 있는 정보를 하나로 묶어주기
   let task = {
    id: randomIDGenerate(),
    taskContent:taskInput.value,
    isComplete:false
   }
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].isComplete == true){   //taskList배열이 true면 리스트 완료(밑줄/회색bg)
      resultHTML += `<div class="task task-bg">
      <div class="task-done">${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-circle-check"></i></button>
        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>`;
    }
    else{
      resultHTML += `<div class="task">
      <div>${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-regular fa-circle-check"></i></button>
        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

// id 생성
function randomIDGenerate() {
  return '_'+Math.random().toString(36).substr(2,9);
}

// 추가
function toggleComplete(id){

  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  console.log(taskList);
  render();
}

// 삭제
function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}