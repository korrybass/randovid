import React from "react"
import { handleUpdateData } from "../../redux/actions"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Form, Field } from "react-final-form"
import RFFormElement from "../UIElements/RFFormElement"
import Input from "../UIElements/Input"
import Select from "../UIElements/Select"

const required = (value) => (value ? undefined : "Required")
const options = ["comedy", "drama", "news", "reality"]

const AdminForm = (props) => {
  const dispatch = useDispatch()
  const {search} = useLocation()
  
  const onSubmit = (values) => {
    const body = {
      ...values,
      id: uuidv4(),
    }
    dispatch(handleUpdateData(body, null, search))
    props.onFinish()
  }
  return (
    <Form
      className="admin-add-form"
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-input-section">
            <Field
              validate={required}
              name="name"
              component={RFFormElement}
              element={Input}
              type="text"
              title="DVD Title"
              placeholder="DVD Title"
            />
          </div>

          <div className="form-input-section">
            <Field
              validate={required}
              name="category"
              component={RFFormElement}
              element={Select}
              title="DVD Category"
              options={options}
            />
          </div>

          <div className="form-input-section checkbox">
            <Field
              name="featured"
              type="checkbox"
              component="input"
              id="featured"
            />
            <label htmlFor="featured">
              Check here to make this item featured.
            </label>
          </div>

          <button className="submit" type="submit">Submit</button>
        </form>
      )}
    />
  )
}

export default AdminForm
