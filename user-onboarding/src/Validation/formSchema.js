import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username needed')
        .min(3, 'Username 3 char long'),
    email: yup
        .string()
        .email('email must be valid')
        .required('email needed'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'password must be 6 char'),
    tos: yup
        .boolean()
        .oneOf([true], 'must accept TOS')
})

export default formSchema