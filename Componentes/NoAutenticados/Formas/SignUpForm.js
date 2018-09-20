import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {autenticacion} from "../../../Store/Servicios/Firebase";


//INPUT COMPONENT USADO EN EL FORMULARIO
const fieldNombre = (props) => {
    return (
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === "correo" ? "email-address" : "default"}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name === "password" || props.input.name === "confirmacion")}
                onBlur={props.input.onBlur}
            />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const fieldImagen = props =>
    <View>
        <View>
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    </View>;

//VALIDACIONES
const validate = (values,props) => {
    const errors = {};

    //validamos la imagen
    if (!props.imagen){
        errors.imagen='la imagen es requerida';
    }
    //validamos el nombre
    if (!values.nombre) {
        errors.nombre = 'requerido';
    }
    else if (values.nombre.length < 5) {
        errors.nombre = 'deben ser almenos 5 caracteres';
    }
    else if (values.nombre.length > 10) {
        errors.nombre = 'debe ser menor a 10 caracteres'
    }

    //validamos el correo
    if (!values.correo) {
        errors.correo = 'requerido'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'correo invalido';
    }

    //validamos el password
    if (!values.password) {
        errors.password = 'requerido';
    }
    else if (values.password.length < 5) {
        errors.password = 'deben ser almenos 5 caracteres';
    }
    else if (values.password.length > 15) {
        errors.password = 'debe ser menor a 15 caracteres';
    }

    //valiamos confirmacion de pass
    if (!values.confirmacion) {
        errors.confirmacion = 'requerido';
    }
    else if (values.password !== values.confirmacion) {
        errors.confirmacion = 'el password debe coincidir';
    }

    return errors;
};

//FORMULARIO
const SignUpForm = (props) => {
    return (
        <View style={styles.container}>
            <Field name="imagen" component={fieldImagen}/>
            <Field name="nombre" component={fieldNombre} ph="Nombre"/>
            <Field name="correo" component={fieldNombre} ph="correo@correo.com"/>
            <Field name="password" component={fieldNombre} ph={"***"}/>
            <Field name="confirmacion" component={fieldNombre} ph={"***"}/>
            <Button
                title="Registrar"
                onPress={props.handleSubmit(props.registro)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3
    },
    textInput: {
        marginBottom: 16
    },
    errors: {
        color: '#FF0000',
    }
});

export default reduxForm({form: 'SignUpForm', validate})(SignUpForm);
