import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup"

function SignUp() {

    const initValue = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    const onSubmit = (data) =>{
        console.log(data);
    }

    const valid = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().min(8).max(20).required(),
    });

    return (
        <div className="flex signup column h-10">
            <div className="shadow flex  mb-5">
                <Formik initialValues={initValue} onSubmit={onSubmit} validationSchema={valid}>
                    <Form className="mx-5">
                        <h3 className="py-2 mt-3 mb-5">Welcome</h3>
                        <div className="input-div name mb-2 w-100 d-flex align-items-center m-2 justify-content-between gap-3">
                            <div className="fistName h-100 position-relative">
                                <Field id="input" name="firstName" placeholder="First name..." className="d-block my-2"/>
                                <label className="d-flex align-self-start d-block">first Name</label>
                                <ErrorMessage name="firstName" className="error py-2" component={"span"}/>
                            </div>
                            <div className="lastName h-100 position-relative">
                                <Field id="input" name="lastName" placeholder="last Name..." className="d-block my-2"/>
                                <label className="d-flex align-self-start d-block">Last Name</label>
                                <ErrorMessage name="lastName" className="error py-2" component={"span"}/>
                            </div> 
                        </div>
                        <div className="input-div position-relative">
                            <Field id="input" name="email" placeholder="email..." className="d-block w-100 m-2 mb-2"/>
                            <label className="d-flex align-self-start px-2 d-block">Enter Your Email</label>
                            <ErrorMessage name="email" className="error py-2" component={"span"}/>
                        </div>
                        <div className="input-div position-relative">
                            <Field id="input" name="password" placeholder="password..." className="d-block m-2 mb-4 w-100"/>
                            <label className="d-flex align-self-start px-2 d-block">Enter Your password</label>
                            <ErrorMessage name="password" className="error py-2 text-start" component={"span"}/>
                        </div>
                        <button className="main-btn form-btn my-3 py-2" type="submit">Sign Up</button>
                        <div className="mt-3 mb-5">
                        <span>I have already an account ? </span>
                            <Link to="/signin" className="main-color">SignIn</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
)
}

export default SignUp;