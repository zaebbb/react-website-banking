import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './Signin'

const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <FormContent>
                    <Form 
                    action="#">
                        <FormH1>
                        Войти в аккаунт
                        </FormH1>
                        <FormLabel 
                        htmlFor="for"
                        >
                        Электронная почта
                        </FormLabel>
                        <FormInput 
                        type="email" 
                        required />
                        <FormLabel 
                        htmlFor="for"
                        >
                        Пароль
                        </FormLabel>
                        <FormInput 
                        type="password" 
                        required />
                        <FormButton 
                        type="submit"
                        >
                        Продолжить
                        </FormButton>
                        <Text>Забыли пароль</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin
