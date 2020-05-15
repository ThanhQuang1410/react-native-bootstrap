import React, { Component }  from 'react'
import { TextInput , View , Text } from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class Input extends Component {
    state = {
        borderColor: this.props.outLineColor,
        isBorder: this.props.border,
        isUnderLine: this.props.underline,
        isRound: this.props.round,
        borderLess: this.props.borderless
    };

    componentDidMount() {
        if(this.state.isUnderLine) {
            this.setState({
                isBorder: false,
                isRound: false
            })
        }
        if(this.state.isRound) {
            this.setState({
                isUnderLine: false,
                isBorder: false
            })
        }
        if(this.state.borderLess) {
            this.setState({
                isUnderLine: false,
                isBorder: false,
                isRound: false
            })
        }
    }

    onFocus() {
        this.setState({
            borderColor: this.props.hightLightColor
        })
    }

    onBlur() {
        this.setState({
            borderColor: this.props.outLineColor
        })
    }

    render() {
        const {
            style,
            className,
            customClass,
            descriptionInBottom,
            descriptionInBottomStyle,
            inputStyle,
            iconFront,
            iconBack,
            placeholderTextColor,
            label,
            labelStyle,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className,customClass);

        return (
            <View
                style={[
                    styleBlock,
                    style
                ]}
            >
                {label && <Text style={labelStyle}>{label}</Text>}
                <View
                    style={[
                        {
                            flexDirection: 'row'
                        },
                        this.state.isBorder ? {
                            borderRadius: 5,
                            borderColor: this.state.borderColor,
                            borderWidth: 1.25,
                        } : {},
                        this.state.isUnderLine ? {
                            borderBottomWidth: 1.25,
                            borderBottomColor: this.state.borderColor
                        } : {},
                        this.state.isRound ? {
                            borderColor: this.state.borderColor,
                            borderWidth: 1.25,
                            borderRadius: 25
                        } : {},
                    ]}
                >
                    {iconFront && iconFront}
                    <TextInput
                        {...props}
                        placeholderTextColor={placeholderTextColor}
                        underlineColorAndroid="transparent"
                        onBlur={ () => this.onBlur() }
                        onFocus={ () => this.onFocus() }
                        style={[
                            {height: 45, paddingLeft: 7, paddingRight: 7, flexGrow: 1, color: 'black'},
                            inputStyle
                        ]}
                    />
                    {iconBack && iconBack}
                </View>
                {descriptionInBottom && <Text style={[{fontSize: 11, color: "#c3c3c3", marginTop: 5},descriptionInBottomStyle]}>{descriptionInBottom}</Text>}
            </View>
        );
    }
}

Input.defaultProps ={
    className: "",
    border: true,
    underline: false,
    round: false,
    borderless: false,
    outLineColor: '#c3c3c3',
    hightLightColor: '#2fbec3',
    placeholderTextColor: '#959595',
    descriptionInBottom: null,
    descriptionInBottomStyle: {},
    label: null,
    labelStyle: {},
    inputStyle: {},
    iconFront: null,
    iconBack: null
};
Input.propTypes = {
    className: PropTypes.string,
    border: PropTypes.bool,
    underline: PropTypes.bool,
    round: PropTypes.bool,
    borderless: PropTypes.bool,
    outLineColor: PropTypes.string,
    hightLightColor: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    descriptionInBottom: PropTypes.string,
    descriptionInBottomStyle: PropTypes.object,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    iconFront: PropTypes.any,
    iconBack: PropTypes.any
};
export default useBootstrap(Input);
