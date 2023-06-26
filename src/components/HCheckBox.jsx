import { Checkbox, FormControlLabel } from '@mui/material'
import PropTypes from 'prop-types';
/**
 * Author : Atilla Sina Postacı
 * CheckBox component
 * Do not perform breaking changes unless it is necessary, only extend.
 */
const HCheckBox = ({onChange,sx,label,labelProps,controlProps,control,checked}) => {
  return (
    <>
        <FormControlLabel
            label={label ? label : "Default Label"}
            control={
                control ? control 
                    :
                    <Checkbox
                        onChange={onChange}
                        defaultChecked={false}
                        checked = {checked}
                        {...controlProps}
                    />
            }
            sx={sx ? sx : { mt: 1 }}
            {...labelProps}
        />
    </>
  )
}

HCheckBox.propTypes = {
    onChange:PropTypes.func,
    sx:PropTypes.object,
    label:PropTypes.string,
    labelProps:PropTypes.object,
    controlProps:PropTypes.object,
    control:PropTypes.element,
    checked:PropTypes.bool,
}

export default HCheckBox