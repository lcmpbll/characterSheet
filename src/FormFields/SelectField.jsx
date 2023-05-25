import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash'
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';

export function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue} = field;
 
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
 
  const handleChange = (event) => {
    const selectedItem = event.target.value;
    const selectedValue = data.find((item) => item.index === selectedItem);


    field.onChange({   
      target: {
        name: field.name,
        value: selectedValue,
        type: 'select',
      },
    });
  };

  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }
  
  return (
    <FormControl {...rest}>
      <InputLabel>{label}</InputLabel>
      
      <Select {...field}  defaultValue={''} value={selectedValue ? selectedValue.index: ''} onChange={handleChange}>
        { data.map((item) => (
          <MenuItem key={item.index} value={item.index}>
            {item.name}
          </MenuItem>
        ))}
      </Select> 
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;