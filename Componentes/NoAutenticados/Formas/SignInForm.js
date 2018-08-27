import React from 'react';
import {StyleSheet, Text, View,TextInput,Button} from 'react-native';
import {Field,reduxForm} from 'redux-form'


//INPUT COMPONENT USADO EN EL FORMULARIO
const fieldNombre=(props)=>{
    return(
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name==="correo"?"email-address":"default"}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name==="password" || props.input.name==="confirmacion")}
                onBlur={props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

//VALIDACIONES
const validate=(values)=>{
    const errors={};
    //validamos el correo
    if(!values.correo){
        errors.correo='requerido'
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo='correo invalido';
    }

    //validamos el password
    if(!values.password){
        errors.password='requerido';
    }
    else if(values.password.length<5){
        errors.password='deben ser almenos 5 caracteres';
    }
    else if (values.password.length>15){
        errors.password='debe ser menor a 15 caracteres';
    }

    return errors;
};

//FORMULARIO
const SignInForm =(props)=>{
    return(
        <View>
            <Field name="correo" component={fieldNombre} ph="correo@correo.com"/>
            <Field name="password" component={fieldNombre} ph={"***"}/>
            <Button
                title="SignIn"
                onPress={props.handleSubmit(props.login)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16
    },
    errors:{
        color:'#FF0000',
    }
});

export default reduxForm({form:'SignInForm',validate})(SignInForm);
