import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import FlexBox from '../components/atoms/FlexBox';

class RegisterFormContainer1 extends Component {

  state = {
    currentPath: '',
    data: null,
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <FlexBox row space>
      <div>{label}</div>
      <div>
        <Input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </FlexBox>
  )

  renderMembers = ({ fields, label, path, meta: { error, submitFailed } }) => {
    return(
    <div>
      <Button type="button" onClick={() => fields.push({})}>
        Add Member
    </Button>
      {submitFailed && error && <span>{error}</span>}
      {label.map((data, i) => (
        <div key={i}>
          <Field
            name={data + i}
            type="text"
            component={this.renderField}
            label={data}
          />
        </div>
      ))}
    </div>
  )}

  handleSubmit = (data) => {
    console.log(data)
  }

  render() {
    const { title, label, path, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        {
          label.map((data, i) => (
            <Field
              name={data}
              type="text"
              component={this.renderField}
              label={data}
            />    
          ))
        }
        {

        }
        <FieldArray name={path} component={this.renderMembers} label={label} path={path}/>
        <div>
          <button type="submit" disabled={submitting}>
            Submit
            </button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
            </Button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
})(RegisterFormContainer1)