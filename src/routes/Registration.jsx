import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Registration.scss';
import { userSchemas } from '../schemas/index';

const initialValues = {
    email: '',
    name: '',
    password: '',
    cpassword: ''

}

export default function Registration() {


    const {values, handleBlur, handleChange, handleSubmit, errors, touched, dirty, isValid } = useFormik({
        initialValues,
        validationSchema: userSchemas,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm();
        }
    })

  return (
    <>
        <form onSubmit={handleSubmit} noValidate>
            <ul className='flex flex-col items-center justify-between w-full'>
                <li>
                    <h1 className='form__title'>Регистрация</h1>
                </li>
                <li>
                    <label htmlFor="name">Логин</label>
                    <input 
                    name='name' 
                    placeholder='Придумайте логин' 
                    className='pl-1 block w-72 h-9 rounded-md border mt-1 transition focus:shadow' type="text" id='name'
                    value={values.name} 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    <div>
                        {errors.name && touched.name && (
                            <p className='form__text'>{errors.name}</p>
                        )}
                    </div>
                </li>
                <li>
                    <label htmlFor="email">Почта</label>
                    <input 
                    name='email' 
                    placeholder='Введите почту' 
                    className='pl-1 block w-72 h-9 rounded-md border mt-1 transition focus:shadow' type="email" id='email'
                    value={values.email} 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    <div>
                        {errors.email && touched.email && (
                            <p className='form__text'>{errors.email}</p>
                        )}
                    </div>
                </li>
                <li>
                    <label htmlFor="password">Пароль</label>
                    <input 
                    name='password' 
                    placeholder='Придумайте пароль' 
                    className='pl-1 block w-72 h-9 rounded-md border mt-1 transition focus:shadow' type="password" id='password'
                    value={values.password} 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    <div>
                        {errors.password && touched.password && (
                            <p className='form__text'>{errors.password}</p>
                        )}
                    </div>
                </li>
                <li>
                    <label htmlFor="cpassword">Повторите пароль</label>
                    <input 
                    name='cpassword' 
                    placeholder='Введите пароль' 
                    className='pl-1 block w-72 h-9 rounded-md border mt-1 transition focus:shadow' type="password" id='cpassword' 
                    value={values.cpassword} 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    <div>
                        {errors.cpassword && touched.cpassword && (
                            <p className='form__text'>{errors.cpassword}</p>
                        )}
                    </div>
                </li>
                <li className='px-5 text-center mb-3'>
                    <input 
                    id='check' 
                    className='checkbox' 
                    type="checkbox"
                    />
                    <label htmlFor='check' className='ml-2 text-sm'>Я даю согласие на обработку персонательных данных</label>
                </li>
                <li className='pb-10'>
                    <Link to='/React-Sneakers/home'>
                        <button disabled={!(dirty && isValid)} type='submit' className='w-72 h-11 rounded-xl text-slate-500 font-medium bg-gradient-to-r from-lime-100 to-lime-300 transition hover:text-slate-600 disabled:opacity-50'>Зарегистрироваться</button>
                    </Link>
                </li>
            </ul>
        </form>
    </>
  )
}
