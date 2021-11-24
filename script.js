function addingEventListener() {
    const myBtn = document.getElementById('myBtn');
    function sayWoof() {
    alert('Woof-Woof');
    }
    myBtn.addEventListener('click', sayWoof);
}
addingEventListener();
