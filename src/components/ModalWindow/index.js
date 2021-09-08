/** Styles */
import Modal from 'react-modal';
import {
    FormButton,
    FormButtonsWrapper,
    FormTitle,
    FormWrapper,
    InputField,
    modalWindowStyles
} from './styles';

/** Form */
import { Field, Form } from 'react-final-form';

/** Misc */
import { v4 } from 'uuid';

Modal.setAppElement('#root');

export default function ModalWindow(props) {
    const { isModalOpen, closeModal, groups, addLink } = props;

    const onFormSubmit = (values) => {
        const transformedValues = { ...values };

        transformedValues.groupId = parseInt(values.groupId, 10);

        addLink(transformedValues);
        closeModal();
    };

    const validateForm = (values) => {
        const errors = {};

        !values.title && (errors.title = true);
        !values.link && (errors.link = true);

        return errors;
    };

    return (
        <Modal
            isOpen={isModalOpen}
            style={modalWindowStyles}
            onRequestClose={closeModal}
        >
            <FormWrapper>
                <Form
                    onSubmit={onFormSubmit}
                    initialValues={{}}
                    validate={validateForm}
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <FormTitle>Добавить ссылку</FormTitle>
                            <Field name="title">
                                {({ input, meta }) => (
                                    <InputField
                                        {...input}
                                        type="text"
                                        placeholder="Название ссылки"
                                        isError={meta.error && meta.touched}
                                    />
                                )}
                            </Field>
                            <Field name="link">
                                {({ input, meta }) => (
                                    <InputField
                                        {...input}
                                        type="text"
                                        placeholder="Адрес ссылки"
                                        isError={meta.error && meta.touched}
                                    />
                                )}
                            </Field>
                            <Field name="groupId" component="select" defaultValue="0">
                                {groups &&
                                    groups.map((item, index) => (
                                        <option key={index + v4} value={index}>
                                            {item}
                                        </option>
                                    ))}
                            </Field>
                            <FormButtonsWrapper>
                                <FormButton type="submit" disabled={submitting}>
                                    Добавить
                                </FormButton>
                                <FormButton
                                    onClick={closeModal}
                                    disabled={submitting}
                                >
                                    Закрыть
                                </FormButton>
                            </FormButtonsWrapper>
                        </form>
                    )}
                />
            </FormWrapper>
        </Modal>
    );
}
