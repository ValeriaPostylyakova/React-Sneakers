import * as Yup from 'yup'; 

const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/);

export const userSchemas = Yup.object({
    email: Yup.string().email('Введите корректный адрес электронной почты'),
    name: Yup.string('Введите корректное имя').required('Это поле обязательно для заполнения'),
    password: Yup.string().matches(passwordRegex,'Пароль должен содержать строчную букву (а-я), прописную букву(А-Я), цифру (0-9), специальный символ (!@#), длина пароля не менее 8 символов').required('Это поле обязательно для заполнения'),
    cpassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Это поле обязательно для заполнения')
})