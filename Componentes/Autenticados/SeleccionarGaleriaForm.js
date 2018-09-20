import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Field, reduxForm} from 'redux-form';


//INPUT COMPONENT USADO EN EL FORMULARIO
const fieldNombre = (props) => {
    return (
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType="default"
                autoCapitalize='none'
                onBlur={props.input.onBlur}
                multiline
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
    if (values.texto && values.texto.length>140){
        errors.texto = 'debe ser menor a 140 caracteres'
    }

    return errors;
};

//FORMULARIO
const SeleccionarGaleriaForm = (props) => {
    return (
        <View style={styles.container}>
            <Field name="imagen" component={fieldImagen}/>
            <View style={{flex: 4}}>
                <Field name="texto" component={fieldNombre} ph="Texto de la imagen"/>
            </View>
            <View style={{flex:1,marginHorizontal: 16}}>
                <Button
                    title="Registrar"
                    onPress={props.handleSubmit(props.registro)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    textInput: {
        marginHorizontal: 16
    },
    errors: {
        color: '#FF0000',
    },
});

export default reduxForm({form: 'SeleccionarGaleriaForm', validate})(SeleccionarGaleriaForm);
