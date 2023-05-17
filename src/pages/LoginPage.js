import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginHeader from '../components/login/LoginHeader'
import LoginLayout from './../components/login/LoginLayout'
import { SvgLockIcon, SvgMailIcon } from './../utils/svgIcons'
import { Formik } from 'formik'
import InputText from '../components/inputs/InputText'
import InputPassword from '../components/inputs/InputPassword'
import { loginSchema } from '../schema/userSchema'
import { useLoginMutation } from '../features/auth/authApi'
import { toast } from 'react-hot-toast'

const LoginPage = () => {
  document.title = 'Welcome Login'
  const navigate = useNavigate()
  const [login, { data, isLoading, error }] = useLoginMutation()

  function loginHandler(values, { resetForm }) {
    delete values?.remember
    login(values)
    resetForm()
  }

  React.useEffect(() => {
    if (data?.data?._id) {
      toast.success('Login Success!')
      navigate('/')
    }
    if (error?.data) {
      toast.error(error.data?.message || error?.error || 'Something Went Wrong')
    }
  }, [data, error, navigate])

  return (
    <LoginLayout>
      <Formik
        initialValues={{
          email: '',
          password: '',
          remember: false,
        }}
        validationSchema={loginSchema}
        onSubmit={loginHandler}
      >
        {({ handleChange, values, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit} className=''>
            <InputText
              className='rounded-full'
              value={values.email}
              error={errors.email}
              icon={SvgMailIcon}
              name='email'
              placeholder='Enter Email'
              onChange={handleChange}
              required
            />
            <InputPassword
              className='rounded-full'
              value={values.password}
              error={errors.password}
              icon={SvgLockIcon}
              name='password'
              placeholder='Enter Password'
              onChange={handleChange}
              required
            />
            {/* Remember Me | Forget Password */}
            <div className='mt-4 flex items-center justify-between space-x-2'>
              <p>Create an new Account?</p>
              <Link
                to='/register'
                className='text-sm text-slate-300 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100'
              >
                Sign Up!
              </Link>
            </div>
            {/* Submit Button */}
            <button
              type='submit'
              className='btn mt-5 w-full border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90'
            >
              Sign In
            </button>
            {/* <LoginFooter /> */}
          </form>
        )}
      </Formik>
    </LoginLayout>
  )
}

export default LoginPage
