import { FormInputLabel, Input, Group } from "../formInput/formInputStyles";

const formInputComponent = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {/* Eğer label değeri varsa, aşağıdaki label elemanı render ediliyor */}
            {label && (
                 <FormInputLabel shrink={otherProps.value.length}>
                 {label}
               </FormInputLabel>
            )}
        </Group>
    );
};

export default formInputComponent;
