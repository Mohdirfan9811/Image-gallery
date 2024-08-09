document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const src = item.querySelector('img').getAttribute('src');
        openModal(src);
    });
});

function openModal(src) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${src}" alt="Image">
        </div>
    `;
    document.body.appendChild(modal);

    document.querySelector('.close').onclick = () => {
        modal.remove();
    };
}


const style = document.createElement('style');
style.innerHTML = `
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
}

.modal-content img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    color: #333;
    cursor: pointer;
}
`;
document.head.appendChild(style);
