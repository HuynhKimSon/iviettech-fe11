import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'react-bootstrap'
import * as Yup from 'yup';
import './style.css';

function ModifyListInput(props) {
    const {
        handleSubmitForm,
    } = props;

    // const inputElement = useRef(null);

    // useEffect(() => {
    //     inputElement.current.focus();
    // }, []);
    return (
        <>
            <Formik
                initialValues={{
                    id: Math.floor(Math.random() * 100),
                    title: '',
                    description: '',
                }
                }
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Mời bạn nhập nội dung công việc.')
                        .max(40, 'Nội dung công việc không được quá 40 kí tự.'),
                    description: Yup.string()
                        .required('Mời bạn nhập mô tả công việc.')
                        .max(80, 'Nội dung công việc không được quá 80 kí tự.')
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    handleSubmitForm(values);
                    resetForm({ values: '' });
                }}>
                <Form className="form">
                    <div className="form-group ">
                        <label htmlFor="title">Tiêu đề</label>
                        <Field
                            name="title"
                            render={(props) => {
                                const { field, meta } = props;
                                return (
                                    <>
                                        <input
                                            // ref={inputElement}
                                            {...field}
                                            type="text"
                                            className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                            placeholder="Nội dung công việc" />
                                        {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                    </>
                                )
                            }} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="title">Mô tả</label>
                        <Field
                            name="description"
                            render={(props) => {
                                const { field, meta } = props;
                                return (
                                    <>
                                        <textarea
                                            {...field}
                                            type="text"
                                            className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                            placeholder="Mô tả công việc" />
                                        {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                    </>
                                )
                            }} />
                    </div>
                    <Button
                        type="submit"
                        variant="primary btnAdd mr-5 ">
                        Add Note
                        </Button>
                </Form>
            </Formik>
        </>
    );
}

export default ModifyListInput;