import React, {useEffect, useState} from "react";
import {Form, Button, Col, Row, Input, Result, message} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {addUserData} from "../../../store/actions/UsersActions"

const AddUser = (props:any) => {

  const dispatch = useDispatch();
  const [ name,setName ] = useState("")
  const [ job,setJob ] = useState("")
  const addedUser = useSelector( (state: any) => state.userReducer.addedUser);
  const addUser = () => {
      dispatch(addUserData(name,job))
  }

  useEffect(() => {
    if(addedUser) {
        message.success('User Added Successfully');
    }
  },[addedUser])

  return(<>
    <Result
      status="success"
      title="Add your user data and Enjoy!"
      subTitle="Entering your personal data will not be available for other people, we understand your privacy :)"
    />
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter user name' }]}
          >
            <Input placeholder="Please enter user name" onChange={(e) => setName(e.target.value)} value={name} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="job"
            label="Job"
            rules={[{ required: true, message: 'Please enter your job name' }]}
          >
            <Input placeholder="Please enter your job name" onChange={(e) => setJob(e.target.value)} value={job} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
        <Button type="primary" shape="round"  size="large" onClick={addUser}>
          Save
        </Button>
          <Button type="primary" shape="round"  size="large" onClick={props.goBack}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  </>)
}

export default AddUser
