import React from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const cx = classNames.bind(styles);

const RegisterForm = ({
  inputData,
  onSubmit,
  onUpdateValue,
}) => {

  
  return (
    <div className={cx('registerForm')}>
      {inputData.map((data, i) => {
        return (
          <div key={i} className={cx('label-container')}>
            <p className={cx('label')}>{data.label}</p>
            {
              data.label === 'description' 
              ?
                <Textarea
                  // fullWidth
                  name={data.label}
                  onChange={e => onUpdateValue(e, data.name)}
                  value={data.value ? data.value : ''}
                />
              :
                <Input
                  // fullWidth
                  name={data.label}
                  onChange={e => onUpdateValue(e, data.name)}
                  value={data.value ? data.value : ''}
                />
            }
          </div>
      )})}
      <div className={cx('button-wrapper')}>
        <Button className={cx('button')} roundCorner width={20} onClick={onSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default RegisterForm;
