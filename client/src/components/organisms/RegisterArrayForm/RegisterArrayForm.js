import React from 'react';
import styles from './RegisterArrayForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const cx = classNames.bind(styles);

const RegisterArrayForm = ({
  inputData,
  onSubmit,
  onAddBodyForm,
  onUpdateArrayInputValue,
  location,
  onAddPhoto,
  onAddLink,
  photoFlag,
  photoProcessing,
  photo,
  onUpdatePhoto,
  onSubmitPhoto,
  link,
  onUpdateLink,
  onSubmitLink,
  onDeletePhoto,
  onDeleteLink,
}) => {

  const labels = {
    education: [
      { label: 'School Type', name: 'schoolType' },
      { label: 'School Name', name: 'schoolName' }, 
      { label: 'Start Date', name: 'startDate' }, 
      { label: 'End Date', name: 'endDate' },
    ],
    extracurricular: [
      { label: 'Position', name: 'position' }, 
      { label: 'Acitivity Name', name: 'activityName' },
      { label: 'City', name: 'city' },
      { label: 'Country', name: 'country' },
      { label: 'Start Date', name: 'startDate' },
      { label: 'End Date', name: 'end Date' }, 
      { label: 'Description', name: 'description' }
    ],
    award: [
      { label: 'Name', name: 'name' },
      { label: 'Year', name: 'year' },
    ],
    academic: [
      { label: 'Description (Test name, score, year)', name: 'description'}
    ]
  }

  return (
    <div className={cx('registerArrayForm')}>
      {inputData.map((data, index) => (
        <div key={index}>
        {
          labels[location].map((label, i) => (
            <div key={i} className={cx('label-container')}>
              <p className={cx('label')}>{label.label}</p>
              {
                label.label.indexOf("Description") !== -1
                ?
                  <Textarea
                    fullWidth
                    name={label.name}
                    onChange={e => onUpdateArrayInputValue(e, label.name, index)}
                    value={data[label.name] ? data[label.name] : ''}
                  />
                :
                  <Input
                    fullWidth
                    name={label.name}
                    onChange={e => onUpdateArrayInputValue(e, label.name, index)}
                    value={data[label.name] ? data[label.name] : ''}
                  />
              }
            </div>
          ))
        }
        </div>
      ))}
      <div className={cx('button-wrapper')}>
        <Button roundCorner width={20} onClick={onSubmit}>Save</Button>
        <Button roundCorner width={20} onClick={onAddBodyForm}>+Add Form</Button>
        <Button roundCorner width={10} onClick={onAddPhoto}>+Add Photo</Button>
        <Button roundCorner width={10} onClick={onAddLink}>+Add Link</Button>
      </div>
      <div>
        {photo.map((data, index) => (
          <div key={index}>
            {
              !data.photoFlag
              ?
                <form onSubmit={e => onSubmitPhoto(e, index)} encType="multipart/form-data">
                  <input disabled={data.isSelected} type="file" onChange={e => onUpdatePhoto(e, index)} />
                  <input type="submit" value="Upload" />
                </form>
              :
                <div>
                  {data.filename}
                  <button onClick={e => onDeletePhoto(e, index)}>
                    remove
                  </button>
                </div>
            }
          </div>  
        ))}
      </div>
      <div>
        {link.map((data, index) => (
          <div key={index}>
          {
            !data.linkFlag
              ?
              <form onSubmit={e => onSubmitLink(e, index)} type="text">
                <input type="text" onChange={e => onUpdateLink(e, index)} />
                <input type="submit" value="submit" />
              </form>
              :
              <div>
                <a href={data.linkUrl}>{data.linkUrl}</a>
                <button onClick={e => onDeleteLink(e, index)}>
                  remove
                </button>
              </div>
          }
        </div>  
        ))}
      </div>
    </div>
  );
};

export default RegisterArrayForm;
