const rooms = [
{ id: 1, name:"Втеча з лабораторії", location:"Київ"},
{id: 2, name:"Таємниця фортеці"}, location: "Львів"},
];
function renderTable()  {
const tbody= document.getElementById("roomTableBody");
tbody.innerHTML= "";
rooms.forEach((room, index) =>{
const erow = document.createElement("tr");
row.innerHTML=
<td>${index + 1}</td>
<td>${room.name}</td>
<td>${room.location}</td>
<td>
    <button class="edit-btn" onclick="editRoom(${room.id})">Видалити</button>
    </td>
;
 tbody.appendChild(row);
});
}
function editRoom(id) {
const room= rooms.find(r => r.id === id);
const= newName = prompt("Нова назва:", room.name);
const= newLoc = prompt("Нова локація:", room.location);
 if (newName && newLoc) {
 room.name = newName;
 room.location= newLoc;
 renderTable();
 }
}
function deleteRoom(id) {
const confirmed = confirm("Ви впевнені, що хочете видалити цю кімнату?");
if (confirmed){
	const index = rooms.findIndex(r => r.id === id );
  rooms.splice(index, 1);
  renderTable();
}
}
renderTable();
