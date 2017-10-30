import React from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const cx = classNames.bind(styles);

const RegisterForm = ({
  solid,
  label,
  onChangeInput,
  onSubmitForm,
  inputContents,
  title,
  path,
}) => {

  const validate = inputContents[path] ? inputContents[path] : {};
  const inputArray = [];

  label.forEach(data => {
    const inputObject = {};
    inputObject.label = data;
    inputObject.value = validate[data];
    inputArray.push(inputObject);
  })

  return (
    <div className={cx('registerForm', { solid })}>
      {inputArray.map((data, i) => {
        return (
          <div key={i} className={cx('label-container')}>
            <p className={cx('label')}>{data.label}</p>
            {
              data.label === 'description' 
              ?
                <Textarea
                  fullWidth
                  name={data.label}
                  onChange={onChangeInput}
                  value={data.value ? data.value : ''}
                />
              :
                <Input
                  fullWidth
                  name={data.label}
                  onChange={onChangeInput}
                  value={data.value ? data.value : ''}
                />
            }
          </div>
      )})}
      <div className={cx('button-wrapper')}>
        <Button roundCorner width={20} onClick={onSubmitForm}>Save</Button>
      </div>
    </div>
  );
};

export default RegisterForm;
