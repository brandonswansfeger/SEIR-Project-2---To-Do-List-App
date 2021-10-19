const deleteBtn = document.querySelector('#buttondelete');
deleteBtn.addEventListener('click', handleDelete);

function handleDelete() {
    const id = deleteBtn.dataset.id;
    fetch('api/tasks/' + id, {
        method: 'DELETE'
    }).then(() => window.location.href = "/");
}});