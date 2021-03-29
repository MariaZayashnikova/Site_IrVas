import postData from './services/service';
import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    let form = document.querySelectorAll('form');

    let message = {
        loading: 'Загрузка...',
        good: "Успешно добавлено!",
        err: "Что-то пошло не так, попробуйте позже"
    };

    checkNumInputs('input[name="user_phone"]');
    
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            item.append(statusMessage);
    
            let formData = new FormData(item);
            if(item.getAttribute('data-form') === 'calc_end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            };
            let json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData(json)
                .then(() => {
                    item.reset();
                    statusMessage.textContent = message.good;
                })
                .catch(() => {
                    statusMessage.textContent = message.err;
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                    state = {
                        'form': 0,
                        'type': 'tree'
                    };
                });
        });
    });
}

export default forms;