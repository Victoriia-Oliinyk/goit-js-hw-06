const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onLoginBtnClick);


function onLoginBtnClick(event) {
  event.preventDefault();

  const {
    elements: {
      email,
      password,
    }
  } = event.currentTarget;

  const isEmpty = !email.value.length || !password.value.length;

  if (isEmpty) {
    alert('Все поля должны быть заполнены');
    return;
  };

  console.log({
    email: email.value,
    password: password.value,
  })

  event.currentTarget.reset();

}
