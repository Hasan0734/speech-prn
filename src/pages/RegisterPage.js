import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginHeader from '../components/login/LoginHeader';
import LoginLayout from '../components/login/LoginLayout';
import { SvgLockIcon, SvgMailIcon, SvgUserIcon } from '../utils/svgIcons';
import { Formik } from 'formik';
import InputText from '../components/inputs/InputText';
import InputPassword from '../components/inputs/InputPassword';

import { createUserSchema } from '../schema/userSchema';
import { useRegisterMutation } from '../features/auth/authApi';
import { toast } from 'react-hot-toast';
import { SvgPhoneIcon } from './../utils/svgIcons';
import Checkbox from '../components/ui/Checkbox';
import Modal from '../components/ui/Modal';
import TermsAndConditions from '../components/termsAndConditions/TermsAndConditions';

const RegisterPage = () => {
  document.title = 'Welcome Register';
  const navigate = useNavigate();
  const [register, { data, isLoading, error }] = useRegisterMutation();
  const [openTerms, setOpenTerms] = useState(false);

  function registerHandler(values, { resetForm }) {
    register(values);
    resetForm();
  }

  React.useEffect(() => {
    if (data?.data?._id) {
      toast.success('Register Success!');
      navigate('/');
    }
    if (error?.data) {
      toast.error(
        error.data?.message || error?.error || 'Registration Failed!'
      );
    }
  }, [data, error, navigate]);

  const modalCloser = () => {
    setOpenTerms(false);
  };

  return (
    <LoginLayout>
      {openTerms && (
        <Modal
          open={openTerms}
          modalHandler={modalCloser}
          maxWidth={'max-w-5xl'}
        >
          <TermsAndConditions modalCloser={modalCloser} />
        </Modal>
      )}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={createUserSchema}
        onSubmit={registerHandler}
      >
        {({ handleChange, values, handleSubmit, errors }) => (
          <form
            onSubmit={handleSubmit}
            className='card mt-5 rounded-lg p-5 lg:p-7'
          >
            <InputText
              value={values.name}
              error={errors.name}
              icon={SvgUserIcon}
              name='name'
              placeholder='Enter Name'
              onChange={handleChange}
              required
            />
            <InputText
              value={values.email}
              error={errors.email}
              icon={SvgMailIcon}
              name='email'
              placeholder='Enter Email'
              onChange={handleChange}
              required
            />
            <InputPassword
              value={values.password}
              error={errors.password}
              icon={SvgLockIcon}
              name='password'
              placeholder='Enter Password'
              onChange={handleChange}
              required
            />
            <div className='flex space-x-1 items-center mt-3'>
              <Checkbox />
              <span className='text-sm'>
                Agree to
                <span
                  onClick={() => setOpenTerms(true)}
                  className='text-blue-500  hover:underline cursor-pointer'
                >
                  {' '}
                  Terms and Conditions
                </span>
                .
              </span>
            </div>

            {/* Remember Me | Forget Password */}

            <div className='mt-4 flex items-center justify-between space-x-2'>
              <p>Already Have an account?</p>
              <Link
                to='/login'
                className='text-sm text-slate-300 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100'
              >
                Sign in!
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='btn mt-5 w-full border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90'
            >
              Sign Up
            </button>
          </form>
        )}
      </Formik>
    </LoginLayout>
  );
};

export default RegisterPage;
