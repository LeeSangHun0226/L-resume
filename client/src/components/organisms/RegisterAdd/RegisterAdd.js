import React from 'react';
import styles from './RegisterAdd.scss';
import classNames from 'classnames/bind';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const cx = classNames.bind(styles);

const RegisterAdd = ({
  path,
  inputContents,
  solid,
  title,
  onAddPhoto,
  onAddLink,
  onAddPhotoUrl,
  onAddLinkUrl,
  onSubmitLink,
}) => {
  const validate = inputContents[path] ? inputContents[path] : {};
  const isPhotoAdded = validate.isPhotoAdded; 
  const isLinkAdded = validate.isLinkAdded;
  const isSubmitLinked = validate.isSubmitLinked;
  const linkValue = validate.link;

  return (
    <div className={cx('registerAdd', { solid })}>
      <div className={cx('button-wrapper')}>
        <Button roundCorner width={20} onClick={onAddPhoto}>+Add photo </Button>
        <div className={cx('bar')} />
        <Button roundCorner width={20} onClick={onAddLink}>+Add Link </Button>
      </div>
      <div className={cx('add-wrapper')}>
      {
        !isPhotoAdded ? false : 
          <Input type="file" name="photo" onChange={onAddPhotoUrl} />
      }
      {
        !isLinkAdded ? false :
        <div>
          <Input type="text" name="link" placeholder="add Link" onChange={onAddLinkUrl} />
          <Button onClick={onSubmitLink}>링크 제출</Button>
        </div>  
      }
      {
        !isSubmitLinked ? false :
        <div>
          {linkValue}
        </div>
      }
      </div>
    </div>
  );
};

export default RegisterAdd;
